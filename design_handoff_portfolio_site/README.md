# Handoff: Jasmine Kim — Portfolio 2026

## Overview

**Jasmine Kim (김일석)의 개인 포트폴리오 웹사이트**입니다. Forward Deployed AI Engineer · Technical Product Manager 포지션 어필용 단일 페이지 사이트로, 한국어 / 영어 이중 언어를 지원합니다.

메인 사이트는 하나의 HTML 문서(`index.html`) + 공용 데이터 파일(`shared/content.js`) 구조로 구성되어 있으며, Express 정적 서버(`server.js`)를 통해 Railway에 바로 배포 가능하도록 세팅되어 있습니다.

## About the Design Files

이 번들에 포함된 HTML/JS 파일들은 이미 **동작하는 정적 사이트**입니다. 일반적인 "디자인 목업 → 재구현" 케이스와 달리, 이 프로젝트는 다음 중 원하시는 방향으로 진행하실 수 있습니다:

1. **그대로 배포 (권장, 가장 빠름)** — `npm install && npm start` 하면 로컬에서 즉시 뜨고, `railway.json` 설정 그대로 Railway/Vercel/Netlify/Fly.io 등 어떤 정적 호스팅에도 배포 가능합니다. GitHub Pages도 가능(단, `server.js`는 사용 안 됨).
2. **다른 스택으로 이식** — Next.js / Astro / Nuxt 등으로 옮기고 싶다면 이 HTML을 **디자인 레퍼런스**로 사용하고, 컴포넌트를 재구성하세요. 콘텐츠는 `shared/content.js`에서 그대로 import 하면 됩니다.

## Fidelity

**High-fidelity (production-ready).** 픽셀 단위로 완성된 라이브 사이트입니다. 색상, 타이포그래피, 스페이싱, 인터랙션이 모두 최종본이며, 실제 프로덕션 콘텐츠(경력, 프로젝트, CV)가 포함되어 있습니다.

---

## Stack

- **Static HTML + vanilla JS** — 프레임워크 없음, 빌드 스텝 없음
- **Express (Node 18+)** — Railway 정적 서빙 + `/healthz` 헬스체크
- **Pretendard Variable** — CDN에서 로드하는 웹폰트

## File Structure

```
design_handoff_portfolio_site/
├── index.html              # 메인 포트폴리오 (Concept B · Deep Forest 채택)
├── shared/
│   └── content.js          # 모든 카피 / 데이터 (KO / EN 이중언어)
├── previews/               # 초기 디자인 컨셉 3종 (참고용, 배포 시 제외 가능)
│   ├── index.html          #   → 3-컨셉 랜딩
│   ├── concept-a.html      #   → Terracotta
│   ├── concept-b.html      #   → Deep Forest ← 채택안
│   └── concept-c.html      #   → Ink Cobalt
├── server.js               # Express 정적 서버
├── package.json            # express 의존성만
├── railway.json            # Railway 배포 설정 (NIXPACKS)
├── ILSUK.KIM_CV.md         # 원본 CV (콘텐츠 소스)
└── .gitignore
```

## Screens / Views

메인 사이트는 **원 페이지 스크롤** 구조이며, 상단 크롬 바에서 KO / EN 토글이 가능합니다.

### 1. Hero (히어로)
- **Purpose**: 첫인상. 이름 + 포지션 + 한 줄 태그라인 + "Available for hire" 배지
- **Layout**: 좌측 정렬, 큰 타이포그래피(이름은 초대형 세리프 이탤릭 포함)
- **Content**:
  - 이름: `김일석` (KO) / `Jasmine Kim` (EN, "Kim"만 italic 세리프)
  - 포지션: `Forward Deployed AI Engineer · Technical Product Manager`
  - 태그라인: KO `AI 서비스를 실제로 만들어 본 PM.` / EN `A PM who has actually shipped AI products.`
  - 배지: `Available for hire · 상담 가능 / Open to talk`

### 2. Vision (비전)
- AI를 "사용하는" PM이 아니라, AI 서비스를 "리딩하는" PM. — 포지셔닝 스테이트먼트

### 3. Experience / Projects (경력 · 프로젝트)
- 카드형 리스트. 각 카드에 회사/역할/기간/요약/성과 지표 표시

### 4. Skills / Stack (스킬)
- 기술 스택 그리드

### 5. Selected Writing / Case Studies
- 대표 프로젝트 케이스 스터디 링크

### 6. Contact / Footer
- 이메일: `meangchoo@gmail.com`
- 전화: `010-8050-3993`
- Copyright: `© 2026 Jasmine Kim`

> 세부 카피와 프로젝트 데이터는 모두 `shared/content.js`에 있습니다. 이 파일 하나만 수정하면 사이트 전체가 업데이트됩니다.

## Interactions & Behavior

- **Language toggle (KO / EN)**: 우상단 크롬 바. `localStorage.ilsuk_lang`에 저장되어 새로고침해도 유지.
- **Smooth scroll**: 앵커 클릭 시 부드러운 스크롤.
- **Font swap**: KO/EN 전환 시 특정 요소(이름 등)의 서체·이탤릭 스타일이 다르게 렌더됨.
- **Hover states**: 카드 호버 시 미묘한 lift + 테두리 강조.
- **Responsive**: 모바일까지 대응 (뷰포트 스케일링).

## State Management

- 언어 상태: `localStorage.ilsuk_lang` (`'ko'` 또는 `'en'`)
- 초기값: `'ko'`
- 상태 변경 시: `document`의 관련 텍스트 노드가 다시 렌더됨 (템플릿 리터럴 재생성 방식).

## Design Tokens (Concept B · Deep Forest)

메인 `index.html`에서 사용하는 색·타이포 시스템 — 세부 hex는 각 HTML의 `<style>` 블록 상단에 CSS variables로 정의되어 있습니다.

- **배경**: 딥 포레스트 그린 / 크림 오프화이트 조합
- **본문 서체**: Pretendard Variable
- **강조 서체**: 세리프 이탤릭 (이름 등)
- **스페이싱**: 8px 그리드
- **라운드**: 카드 12–16px

## Assets

- **폰트**: Pretendard Variable (CDN)
- **CV 원본**: `ILSUK.KIM_CV.md` — 콘텐츠 소스
- **이미지**: 외부 이미지 없음 (전부 CSS/SVG로 처리)

---

## Local development

```bash
cd design_handoff_portfolio_site
npm install
npm start
# → http://localhost:3000
```

## Deploy on Railway

1. 이 폴더를 GitHub 저장소로 푸시
2. Railway → **New Project → Deploy from GitHub repo** → 저장소 선택
3. Railway가 `package.json`을 자동 감지하고 `npm start` 실행
4. `PORT`는 Railway가 주입, 서버는 자동으로 픽업
5. 헬스체크: `/healthz`
6. 환경 변수 필요 없음

## Deploy on Vercel / Netlify (정적 호스팅)

`server.js` 없이도 순수 정적 사이트로 동작하므로, 프로젝트 루트를 그대로 정적 호스팅에 올려도 됩니다.

## Editing content

모든 카피는 [`shared/content.js`](shared/content.js)에 있습니다. 이 파일만 수정 후, `index.html` 상단의 `<script src="shared/content.js?v=N">` 태그의 `v` 숫자를 올려 브라우저 캐시를 무효화하세요.

## Files in this handoff

| File | Purpose |
|---|---|
| `index.html` | 메인 포트폴리오 (배포 대상) |
| `shared/content.js` | 모든 콘텐츠 (KO/EN) |
| `server.js` | Express 정적 서버 |
| `package.json` | 의존성 정의 |
| `railway.json` | Railway 배포 설정 |
| `previews/*.html` | 초기 컨셉 3종 (참고용) |
| `ILSUK.KIM_CV.md` | 원본 CV |

---

## Recent changes

- 영문 페이지 히어로 이름 및 사이트 전반의 영문 표기를 `Ilsuk Kim` → `Jasmine Kim`으로 통일 (2026-08-27)
- 한글 표기 `김일석`은 그대로 유지
- `README.md`, `package.json` description은 프로젝트 메타파일이라 변경하지 않음 (필요 시 수동 업데이트)
