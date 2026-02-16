# Noplan Introduce

Noplan 앱의 AdMob 개발자 웹사이트입니다. 앱스토어에 등록할 개발자 URL로 사용합니다.

## 구성

| 파일 | 설명 |
|------|------|
| `index.html` | 메인 페이지 (앱 소개, 개발자 소개) |
| `styles.css` | 스타일 |
| `i18n.js` | 다국어 (한국어/일본어/영어) – 브라우저 언어 자동 감지 |
| `app-ads.txt` | AdMob 필수 파일 – 광고 사기 방지 |

## 다국어

`navigator.language`로 브라우저 언어를 감지해 자동 표시합니다.

- `ja` → 일본어
- `ko` → 한국어
- 그 외 → 영어

## 배포 전 필수

**app-ads.txt 수정**

1. [AdMob 콘솔](https://admob.google.com/) → 설정 → 퍼블리셔 ID 확인
2. `app-ads.txt`에서 `pub-0000000000000000`을 실제 퍼블리셔 ID로 교체

## 실행

```bash
# 로컬 서버
python3 -m http.server 8080
# 또는
npx serve .
```

## 호스팅

GitHub Pages, Firebase Hosting, Vercel 등 정적 호스팅에 배포 가능합니다. 앱스토어(Google Play, App Store)의 개발자 웹사이트 URL에 이 사이트 주소를 등록하세요.
