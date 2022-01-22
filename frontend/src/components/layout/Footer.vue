<template>
  <div class="footer" id="footer">
    <ul>
      <li>
        <span class="footer_text1">학생회실 위치</span>
        <span class="footer_text1_1"
          >서울특별시 광진구 능동로 120 건국대학교 건축대학 A105</span
        >
      </li>
      <li>
        <span class="footer_text2">학생회장 : 이동하</span>
        <span class="footer_text2_1">연락처 : 010-xxxx-xxxx</span>
      </li>
      <li>
        <span class="footer_text3">사이트 개발 및 담당 : 김효수</span>
        <span class="footer_text3_1">연락처 : 010-2629-6378</span>
        <span class="footer_text3_2">이메일 : khs0603@konkuk.ac.kr</span>
      </li>
      <li>
        <a href="https://www.instagram.com/ku_arch/" target="_blank"
          >인스타그램</a
        >
        <a href="https://www.facebook.com/groups/KuArchi/" target="_blank"
          >페이스북</a
        >
        <a href="https://cafe.naver.com/caku2022.cafe" target="_blank"
          >네이버 카페</a
        >
      </li>
      <li>
        <div class="footer_text4">건국대학교 건축대학 제53대 학생회 오:늘</div>
      </li>
      <li>
        <div class="footer_text5">
          Copyright © 2022 SCCAKU. All Right Reserved.
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
* {
  font-family: "Noto Sans KR", sans-serif;
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  border-collapse: collapse;
  color: red; /* 수정시 눈에 띄기 위해*/
  list-style: none;
}
.footer {
  background-color: #e07e66;
  text-align: center;
  width: 100vw;
  padding: 3vh 5vw 25vw 5vw;
  font-size: 0.5rem;
}
.footer li {
  padding-top: 0.5vh;
}
.footer span {
  color: #fff;
  margin: 0 0.5rem;
}
.footer div {
  color: #fff;
}
.footer a {
  display: inline;
  position: relative;
  color: #fff;
  text-decoration: none;
  padding: 0 2rem 0 2rem;
}
.footer a:before {
  content: "";
  width: 0.1rem;
  height: 0.5rem;
  background-color: #dbdbdb;
  position: absolute;
  left: 0;
  top: 0.33rem;
}
.footer a:first-child:before {
  width: 0;
}
</style>