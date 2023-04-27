import styled, { css } from "styled-components";
import { message } from "antd";
import { useEffect, useState } from "react";
import ListApi, { GetListFilters, GetListParams, ListResponse } from "api/listApi";
import { validateResponse } from "api/api";
import { deleteMock, listMock } from "api/mock";
import { Filter } from "./components/filter";
import { TableList } from "./components/tableList";

const Wrapper = styled.div`
  margin: 50px 60px;
`;

export function List() {
  const [tableData, setTableData] = useState<ListResponse>({
    data: [],
    total: 0,
  });
  const [filterParams, setFilterParams] = useState({});
  const [page, setPage] = useState(1);

  const getList = (params: GetListParams) => {
    ListApi.getList(params)
      .then((resp) => {
        // 不使用mock数据的情况下，会在这里处理响应
        // if (validateResponse(resp)) {
        // }
      })
      .catch((e) => {
        // message.error(e.message);
        // 使用mock属性
        const resp = listMock;
        setTableData({
          data: resp.data.data.data,
          total: resp.data.data.total,
        });
      });
  };

  useEffect(() => {
    getList({
      offset: 0,
      size: 10,
    });
  }, []);

  const handleSubmit = (params: GetListFilters) => {
    setFilterParams(params);
    setPage(1);
    getList({
      offset: 0,
      size: 10,
      ...params,
    });
  };

  const handlePageChange = (page: number) => {
    getList({
      offset: (page - 1) * 10,
      size: 10,
      ...filterParams,
    });
    setPage(page);
  };

  const handleDelete = (id: string) => {
    ListApi.delete(id)
      .then((resp) => {
        // 不使用mock数据的情况下，会在这里处理响应
        // if (validateResponse(resp)) {
        // }
      })
      .catch((e) => {
        // message.error(e.message);
        // 使用mock属性
        const resp = deleteMock;
        if (resp.data.data) {
          message.success("删除成功");
          getList({
            offset: (page - 1) * 10,
            size: 10,
            ...filterParams,
          });
        }
      });
  };
  return (
    <Wrapper>
      <h1>xx审核平台-列表页</h1>
      <Filter onSubmit={(params) => handleSubmit(params)} />
      <TableList
        page={page}
        total={tableData?.total}
        list={tableData?.data}
        pageChange={(page) => handlePageChange(page)}
        deleteItem={(id) => handleDelete(id)}
      />
    </Wrapper>
  );
}
