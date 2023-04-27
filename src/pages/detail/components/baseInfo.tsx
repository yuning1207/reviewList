import { Descriptions } from "antd";
import { DetailBaseInfo } from "api/detailApi";

type BaseInfoProps = {
  info?: DetailBaseInfo;
};

export const BaseInfo = (props: BaseInfoProps) => {
  const { id, userName, website, qualifications, tradeLevel1, tradeLevel2, type, note } =
    props.info || {};
  return (
    <Descriptions title="XX审核平台-审核页" bordered>
      <Descriptions.Item label="用户名">{userName}</Descriptions.Item>
      <Descriptions.Item label="用户id">{id}</Descriptions.Item>
      <Descriptions.Item label="公司网站">{website}</Descriptions.Item>
      <Descriptions.Item label="资质">{qualifications}</Descriptions.Item>
      <Descriptions.Item label="一级行业">{tradeLevel1}</Descriptions.Item>
      <Descriptions.Item label="二级行业">{tradeLevel2}</Descriptions.Item>
      <Descriptions.Item label="用户类型">{type}</Descriptions.Item>
      <Descriptions.Item label="批注">{note}</Descriptions.Item>
    </Descriptions>
  );
};
