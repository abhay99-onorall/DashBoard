// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Creators",
  },
  {
    icon: UilUsersAlt,
    heading: "Report Section",
  },
  {
    icon: UilPackage,
    heading: "Products",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];

export const interestList = [
  {
    id: 1,
    interest: "all",
  },
  {
    id: 2,
    interest: "Photography",
  },
  {
    id: 3,
    interest: "Arts",
  },
  {
    id: 4,
    interest: "Dancing",
  },
  {
    id: 5,
    interest: "Cooking",
  },
];

export const Data = [
  {
    Views: 6570,
    category: "Photography",
    creator: "Garrot Leverage",
    id: 1,
    supporters: 388,
    subContainer: [
      {
        latestVideos: [
          {
            id: 1,
            url: "example1.com",
          },
          {
            id: 2,
            url: "example2.com",
          },
          {
            id: 3,
            url: "example3.com",
          },
          {
            id: 4,
            url: "example4.com",
          },
        ],
        parentId: 1,
      },
    ],
  },
  {
    Views: 570,
    category: "Dancing",
    creator: "Emily",
    id: 2,
    supporters: 388,
    subContainer: [
      {
        latestVideos: [
          {
            id: 1,
            url: "https://example1.com",
          },
          {
            id: 2,
            url: "https://example1.com",
          },
          {
            id: 3,
            url: "https://example1.com",
          },
        ],
        parentId: 2,
      },
    ],
  },
  {
    Views: 6570,
    category: "Cooking",
    creator: "Sarla's kitchen",
    id: 3,
    supporters: 388,
    subContainer: [
      {
        latestVideos: [
          {
            id: 1,
            url: "https://example1.com",
          },
        ],
        parentId: 3,
      },
    ],
  },
  {
    Views: 6570,
    category: "Coding",
    creator: "keen coder",
    id: 4,
    supporters: 388,
    subContainer: [
      {
        latestVideos: [
          {
            id: 1,
            url: "https://example.com",
          },
          {
            id: 2,
            url: "https://example2.com",
          },
        ],
        parentId: 4,
      },
    ],
  },
  {
    Views: 6570,
    category: "Photography",
    creator: "Garrot Leverage",
    id: 5,
    supporters: 388,
    subContainer: [
      {
        latestVideos: [
          {
            url: "https://example.com",
          },
        ],
        parentId: 5,
      },
    ],
  },
];

export const tableHead = [
  {
    id: 1,
    heading: "Creator",
  },
  {
    id: 2,
    heading: "Category",
  },
  {
    id: 3,
    heading: "Views",
  },
  {
    id: 4,
    heading: "Supporters",
  },
];

export const ReportData = [
  {
    contentId: 1,
    VideoTitle: "Main Pareshan",
    Report: [
      {
        id: 1,
        userid: "TwziSDKjdsi",
        userName: "Abhay",
        reportTitle: "Misleading content",
        reportDescription:
          "Video is Misleading, should be removed from the platform",
        parentId: 1,
        img: "/img1.png",
        date: "11/09/2022",
      },
      {
        id: 2,
        userid: "TwziSDKjdsj",
        userName: "Abhay",
        reportTitle: "Misleading content2",
        reportDescription:
          "Video is Misleading, should be removed from the platform tpoj",
        parentid: 1,
        img: "/img1.png",
        date: "11/09/2022",
      },
      {
        id: 3,
        userid: "TwziSDKjdsk",
        userName: "Abhay",
        reportTitle: "Misleading content",
        reportDescription:
          "Video is Misleading, should be removed from the platform",
        parentid: 1,
        img: "/img1.png",
        date: "11/09/2022",

      },
      {
        id: 4,
        userid: "TwziSDKjdsl",
        userName: "Abhay",
        reportTitle: "Misleading content",
        reportDescription:
          "Video is Misleading, should be removed from the platform",
        parentid: 1,
        img: "/img1.png",
        date: "11/09/2022",

      },
      {
        id: 5,
        userid: "TwziSDKjdsm",
        userName: "Abhay",
        reportTitle: "Sexual Content",
        reportDescription:
          "Video is Misleading, should be removed from the platform",
        parentid: 1,
        img: "/img1.png",
        date: "11/09/2022",

      },
    ],
  },
  {
    contentId: 2,
    VideoTitle: "Main Pareshan hoon",
    Report: [
      {
        id: 1,
        userid: "TwziSDKjdsi",
        userName: "Abhay",
        reportTitle: "Misleading content",
        reportDescription:
          "Video is Misleading, should be removed from the platform",
        parentId: 2,
        img: "/img1.png",
        date: "11/09/2022",

      },
      {
        id: 2,
        userid: "TwziSDKjdsj",
        userName: "Abhay",
        reportTitle: "Sexual Content",
        reportDescription:
          "Video is Misleading, should be removed from the platform tpoj",
        parentid: 2,
        img: "/img1.png",
        date: "11/09/2022",

      },
      {
        id: 3,
        userid: "TwziSDKjdsk",
        userName: "Abhay",
        reportTitle: "Harassment",
        reportDescription:
          "Video is Misleading, should be removed from the platform",
        parentid: 2,
        img: "/img1.png",
        date: "11/09/2022",

      },
      {
        id: 4,
        userid: "TwziSDKjdsl",
        userName: "Abhay",
        reportTitle: "Misleading content 2",
        reportDescription:
          "Video is Misleading, should be removed from the platform",
        parentid: 2,
        img: "/img1.png",
        date: "11/09/2022",

      },
      {
        id: 5,
        userid: "TwziSDKjdsm",
        userName: "Abhay",
        reportTitle: "Misleading content",
        reportDescription:
          "Video is Misleading, should be removed from the platform",
        parentid: 2,
        img: "/img1.png",
        date: "11/09/2022",

      },
    ],
  },
];
