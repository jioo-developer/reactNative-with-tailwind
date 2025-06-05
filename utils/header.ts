import axiosInstance from "@/api/axios";

function setHeader(key: string, value: string) {
  axiosInstance.defaults.headers.common[key] = value;
}

function removeHeader(key: string) {
  if (!axiosInstance.defaults.headers.common[key]) {
    return;
  }

  delete axiosInstance.defaults.headers.common[key];
}

// axios 요청을 할떄 어떤 api 요청을 보낼 떄 토큰이 있어야만 요청이 보내지는 순간이 있다
// 이때 공통 헤더에 토큰을 추가 해놓으면 매번 토큰을 넣고 api 요청을 안해도 된다

export { removeHeader, setHeader };
