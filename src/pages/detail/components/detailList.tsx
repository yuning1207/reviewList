import styled from "styled-components";
import {
  passLandPageMock,
  passMock,
  refuseLandPageMock,
  refuseMock,
  refuseUserMock,
  stopMock,
} from "api/mock";
import { message, Button, Table } from "antd";
import DetailApi, { List, detailListItem } from "api/detailApi";
import React, { useState } from "react";

type ListProps = {
  list?: List;
  id?: string;
  handleNext: () => void;
};

const ActionBtn = styled.div`
  margin: 20px 0;
  button {
    margin-right: 10px;
  }
`;

const LandingPage = styled.div`
  display: flex;
  height: 100%;
  > div {
    padding: 16px 0;
  }
  iframe {
    height: calc(100% - 30px);
    width: calc(100% - 8px);
    margin-right: 4px;
  }
  .action-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 1px solid rgb(240, 240, 240);
  }
`;

export const DetailList = (props: ListProps) => {
  const [select, setSelect] = useState<string[]>([]);
  const handleSelectChange = (selectedRowKeys: string[]) => {
    setSelect(selectedRowKeys);
  };
  const handlePass = (idList: string[]) => {
    alert(JSON.stringify(idList));
    DetailApi.passDetail(idList)
      .then((resp) => {
        // 不使用mock数据的情况下，会在这里处理响应
        // if (validateResponse(resp)) {
        // }
      })
      .catch((e) => {
        // message.error(e.message);
        // 使用mock属性
        const resp = passMock;
        if (resp.data.data) {
          message.success("通过成功");
        }
      });
  };
  const handleRefuse = (idList: string[]) => {
    alert(JSON.stringify(idList));
    DetailApi.refuseDetail(idList)
      .then((resp) => {
        // 不使用mock数据的情况下，会在这里处理响应
        // if (validateResponse(resp)) {
        // }
      })
      .catch((e) => {
        // message.error(e.message);
        // 使用mock属性
        const resp = refuseMock;
        if (resp.data.data) {
          message.success("拒绝成功");
        }
      });
  };
  const handleStop = (idList: string[]) => {
    alert(JSON.stringify(idList));
    DetailApi.stopDetail(idList)
      .then((resp) => {
        // 不使用mock数据的情况下，会在这里处理响应
        // if (validateResponse(resp)) {
        // }
      })
      .catch((e) => {
        // message.error(e.message);
        // 使用mock属性
        const resp = stopMock;
        if (resp.data.data) {
          message.success("搁置成功");
        }
      });
  };
  const handlePassLandPage = () => {
    alert(JSON.stringify(props.id));
    DetailApi.passLandPage(props.id!)
      .then((resp) => {
        // 不使用mock数据的情况下，会在这里处理响应
        // if (validateResponse(resp)) {
        // }
      })
      .catch((e) => {
        // message.error(e.message);
        // 使用mock属性
        const resp = passLandPageMock;
        if (resp.data.data) {
          message.success("落地页通过成功");
        }
      });
  };
  const handleRefuseLandPage = () => {
    alert(JSON.stringify(props.id));
    DetailApi.refuseLandPage(props.id!)
      .then((resp) => {
        // 不使用mock数据的情况下，会在这里处理响应
        // if (validateResponse(resp)) {
        // }
      })
      .catch((e) => {
        // message.error(e.message);
        // 使用mock属性
        const resp = refuseLandPageMock;
        if (resp.data.data) {
          message.success("落地页拒绝成功");
        }
      });
  };
  const refuseUser = () => {
    alert(JSON.stringify(props.id));
    DetailApi.refuseUser(props.id!)
      .then((resp) => {
        // 不使用mock数据的情况下，会在这里处理响应
        // if (validateResponse(resp)) {
        // }
      })
      .catch((e) => {
        // message.error(e.message);
        // 使用mock属性
        const resp = refuseUserMock;
        if (resp.data.data) {
          message.success("拒绝账户成功");
        }
      });
  };
  const columns = [
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "描述",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "图片",
      dataIndex: "img",
      key: "img",
      render: (_: any, record: detailListItem) => record.img.map((src) => <img src={src} alt="" />),
    },
    {
      title: "操作",
      key: "action",
      render: (_: any, record: detailListItem) => (
        <div>
          <Button type="link" onClick={() => handlePass([record.id])}>
            通过
          </Button>
          <Button type="link" onClick={() => handleRefuse([record.id])}>
            拒绝
          </Button>
        </div>
      ),
    },
    {
      title: "落地页",
      dataIndex: "landingPage",
      key: "landingPage",
      className: "landing-page",
      render: (_: any, record: detailListItem, index: number) => {
        return {
          children: (
            <LandingPage>
              <div className="iframe">
                <a href={props.list?.landingPage}>{props.list?.landingPage}</a>
                <iframe src={props.list?.landingPage} title={props.list?.landingPage} />
              </div>
              <div className="action-btn">
                <Button type="link" onClick={() => handlePassLandPage()}>
                  通过
                </Button>
                <Button type="link" onClick={() => handleRefuseLandPage()}>
                  拒绝
                </Button>
              </div>
            </LandingPage>
          ),
          props: {
            rowSpan: index === 0 ? props.list?.list.length : 0,
          },
        };
      },
    },
  ];
  return (
    <>
      <ActionBtn>
        <Button
          onClick={() => {
            if (select.length) {
              handlePass(select);
            } else {
              message.error("请先选择数据");
            }
          }}
        >
          通过所选
        </Button>
        <Button
          onClick={() => {
            if (select.length) {
              handleRefuse(select);
            } else {
              message.error("请先选择数据");
            }
          }}
        >
          拒绝所选
        </Button>
        <Button onClick={() => refuseUser()}>拒绝账户</Button>
        <Button
          onClick={() => {
            if (select.length) {
              handleStop(select);
              props.handleNext();
              setSelect([]);
            } else {
              message.error("请先选择数据");
            }
          }}
        >
          搁置
        </Button>
        <Button
          onClick={() => {
            props.handleNext();
            setSelect([]);
          }}
        >
          下一个任务
        </Button>
      </ActionBtn>
      <Table
        bordered={true}
        rowKey="id"
        columns={columns}
        dataSource={props.list?.list}
        pagination={false}
        rowSelection={{
          type: "checkbox",
          selectedRowKeys: select,
          onChange: (selectedRowKeys, selectedRows) =>
            handleSelectChange(selectedRowKeys as string[]),
        }}
      />
    </>
  );
};
