import { DetailResponseData } from "./detailApi";
import { ListResponseData } from "./listApi";

export const listMock = {
  data: {
    data: {
      total: 106,
      data: Array.from({ length: 106 }).map((item, index) => ({
        id: `${index + 1}`,
        userName: `用户名${index + 1}`,
        product: `产品线${index + 1}`,
        trade: `行业${index + 1}`,
        time: `2020-05-20 14:30:00`,
      })),
    },
  },
} as { data: ListResponseData };

export const deleteMock = {
  data: {
    data: true,
  },
};

export const detailMock = {
  data: {
    data: {
      id: "3",
      userName: "xxx用户名1",
      website: "www.a.b.com",
      qualifications: "大陆企业单位",
      tradeLevel1: "行业1",
      tradeLevel2: "行业2",
      type: "普通",
      note: "批注批注",
      list: {
        list: [
          {
            id: "31",
            title: "标题1-普通鲜花速递-花礼网送花上门-同城鲜花店",
            desc: "描述1-普通鲜花速递-礼品行业深耕17年，1-3小时送达2000多城市。诚信经营，用心服务，打造品牌百年老店。",
            img: ["http://placekitten.com/50/50", "http://placekitten.com/49/49"],
          },
          {
            id: "32",
            title: "标题2-普通鲜花速递-花礼网送花上门-同城鲜花店",
            desc: "描述2-普通鲜花速递-礼品行业深耕17年，1-3小时送达2000多城市。诚信经营，用心服务，打造品牌百年老店。",
            img: ["http://placekitten.com/51/51", "http://placekitten.com/52/52"],
          },
          // {
          //   id: "33",
          //   title: "标题3-普通鲜花速递-花礼网送花上门-同城鲜花店",
          //   desc: "描述3-普通鲜花速递-礼品行业深耕17年，1-3小时送达2000多城市。诚信经营，用心服务，打造品牌百年老店。",
          //   img: ["http://placekitten.com/50/50", "http://placekitten.com/49/49"],
          // },
          // {
          //   id: "34",
          //   title: "标题4-普通鲜花速递-花礼网送花上门-同城鲜花店",
          //   desc: "描述4-普通鲜花速递-礼品行业深耕17年，1-3小时送达2000多城市。诚信经营，用心服务，打造品牌百年老店。",
          //   img: ["http://placekitten.com/51/51", "http://placekitten.com/52/52"],
          // },
        ],
        landingPage: "https://ant.design/index-cn",
      },
    },
  },
} as { data: DetailResponseData };

export const nextTaskMock = {
  data: {
    data: {
      total: 1,
      data: [
        {
          id: "4",
          userName: `用户名4`,
          product: `产品线4`,
          trade: `行业4`,
          time: `2020-05-20 14:30:00`,
        },
      ],
    },
  },
} as { data: ListResponseData };

export const nextDetailMock = {
  data: {
    data: {
      id: "4",
      userName: "xxx用户名1",
      website: "www.a.b.com",
      qualifications: "大陆企业单位",
      tradeLevel1: "行业1",
      tradeLevel2: "行业2",
      type: "普通",
      note: "批注批注",
      list: {
        list: [
          {
            id: "41",
            title: "标题1-普通鲜花速递-花礼网送花上门-同城鲜花店",
            desc: "描述1-普通鲜花速递-礼品行业深耕17年，1-3小时送达2000多城市。诚信经营，用心服务，打造品牌百年老店。",
            img: ["http://placekitten.com/50/50", "http://placekitten.com/49/49"],
          },
          {
            id: "42",
            title: "标题2-普通鲜花速递-花礼网送花上门-同城鲜花店",
            desc: "描述2-普通鲜花速递-礼品行业深耕17年，1-3小时送达2000多城市。诚信经营，用心服务，打造品牌百年老店。",
            img: ["http://placekitten.com/51/51", "http://placekitten.com/52/52"],
          },
        ],
        landingPage: "https://ant.design/index-cn",
      },
    },
  },
} as { data: DetailResponseData };

export const passMock = {
  data: {
    data: true,
  },
};

export const refuseMock = {
  data: {
    data: true,
  },
};

export const stopMock = {
  data: {
    data: true,
  },
};

export const passLandPageMock = {
  data: {
    data: true,
  },
};

export const refuseLandPageMock = {
  data: {
    data: true,
  },
};

export const refuseUserMock = {
  data: {
    data: true,
  },
};
