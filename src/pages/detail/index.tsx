import DetailApi, { DetailBaseInfo, List } from "api/detailApi";
import ListApi from "api/listApi";
import { detailMock, nextTaskMock } from "api/mock";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BaseInfo } from "./components/baseInfo";
import { DetailList } from "./components/detailList";

type DetailProps = {
  location: Location & { state: { id: string; offset: number } };
};

const Wrapper = styled.div`
  margin: 50px 60px;
  td {
    height: 1px;
  }
  .landing-page {
    padding: 0 16px !important;
  }
`;

export function Detail(props: DetailProps) {
  const [baseInfo, setBaseInfo] = useState<DetailBaseInfo>();
  const [list, setList] = useState<List>();
  useEffect(() => {
    const { id } = props.location.state;
    if (id) {
      getDetail(id);
    }
  }, []);
  const getDetail = (id: string) => {
    DetailApi.getDetail(id)
      .then((resp) => {
        // 不使用mock数据的情况下，会在这里处理响应
        // if (validateResponse(resp)) {
        // }
      })
      .catch((e) => {
        // message.error(e.message);
        // 使用mock属性
        const { list, ...baseInfo } = detailMock.data.data;
        setBaseInfo(baseInfo);
        setList(list);
      });
  };
  const handleNext = () => {
    ListApi.getList({
      offset: props.location.state.offset,
      size: 1,
    })
      .then((resp) => {
        // 不使用mock数据的情况下，会在这里处理响应
        // if (validateResponse(resp)) {
        // }
      })
      .catch((e) => {
        // message.error(e.message);
        // 使用mock属性
        const { id } = nextTaskMock.data.data.data[0];
        getDetail(id);
      });
  };
  return (
    <Wrapper>
      <BaseInfo info={baseInfo} />
      <DetailList list={list} id={baseInfo?.id} handleNext={() => handleNext()} />
    </Wrapper>
  );
}
