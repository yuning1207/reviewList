import styled, { css } from "styled-components";
import { Form, Button, Input, DatePicker } from "antd";
import { GetListFilters } from "api/listApi";

const { RangePicker } = DatePicker;

const FilterWapper = styled.div`
  .ant-form-item-row {
    margin: 10px 10px 10px 0;
  }
`;

type FilterProps = {
  onSubmit: (params: GetListFilters) => void;
};

type FormValues = {
  userName?: string;
  product?: string;
  trade?: string;
  time?: string;
};

export const Filter = (props: FilterProps) => {
  const finish = (values: FormValues) => {
    const params: GetListFilters & FormValues = {
      ...values,
      startTime: undefined,
      endTime: undefined,
    };
    delete params.time;
    if (values.time) {
      params.startTime = values.time[0].valueOf();
      params.endTime = values.time[1].valueOf();
    }
    props.onSubmit(params);
  };
  return (
    <FilterWapper>
      <Form name="form" layout="inline" onFinish={(values) => finish(values)}>
        <Form.Item name="userName" label="用户名">
          <Input />
        </Form.Item>
        <Form.Item name="product" label="产品线">
          <Input />
        </Form.Item>
        <Form.Item name="trade" label="行业">
          <Input />
        </Form.Item>
        <Form.Item name="time" label="任务创建时间">
          <RangePicker placeholder={["开始时间", "结束时间"]} showTime />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
        </Form.Item>
      </Form>
    </FilterWapper>
  );
};
