// //외부돔에 렌더링 하는 역할 모달 컴포넌트를 외부 돔에 렌더링 하는 역할
// import React from "react";
// import { createPortal } from "react-dom";

// interface Props {
//   selector?: string;
//   children: React.ReactNode;
// }

// const Portal: React.FC<Props> = ({ children, selector }) => {
//   // 첫번째 인자로 엘리먼트,문자열,프래그 먼트 같은 렌더링 될 수 있는 리액트 엘리먼트를  받고 두번째로인자로 돔 엘리먼트를 받는다
//   const rootElement = selector && document.querySelector(selector);
//   return <>{rootElement ? createPortal(children, rootElement) : children}</>;
// };
// export default Portal;
import React from "react";

export default function Portal() {
  return <div>Portal</div>;
}
