import { DETAIL } from "App";
import { Button, Table } from "antd";
import { listItem } from "api/listApi";
import history from "utils/history";

type TableProps = {
  page: number;
  list: listItem[];
  total: number;
  pageChange: (page: number) => void;
  deleteItem: (id: string) => void;
};

export const TableList = (props: TableProps) => {
  const columns = [
    {
      title: "用户名",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "产品线",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "行业",
      dataIndex: "trade",
      key: "trade",
    },
    {
      title: "创建时间",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "操作",
      key: "action",
      render: (_: any, record: listItem, index: number) => (
        <div>
          <Button
            type="link"
            onClick={() => {
              history.push({
                pathname: DETAIL,
                state: {
                  id: record.id,
                  offset: (props.page - 1) * 10 + index,
                },
              });
            }}
          >
            审核
          </Button>
          <Button
            type="link"
            onClick={() => {
              props.deleteItem(record.id);
            }}
          >
            删除
          </Button>
        </div>
      ),
    },
  ];
  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={props.list}
      pagination={{
        showSizeChanger: false,
        current: props.page,
        total: props.total,
        onChange: (page) => props.pageChange(page),
      }}
    />
  );
};
