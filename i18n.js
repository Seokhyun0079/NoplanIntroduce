const translations = {
  tagline: {
    ko: 'Developer Reference',
    ja: 'Developer Reference',
    en: 'Developer Reference',
  },
  appIntroTitle: {
    ko: '앱 소개',
    ja: 'アプリ紹介',
    en: 'About the App',
  },
  appIntroText: {
    ko: 'Noplan은 일정을 관리하는 크로스플랫폼 앱입니다. Flutter로 개발되었으며 Android, iOS에서 사용할 수 있습니다. 캘린더 뷰, 반복 일정, 일정·앨범 관리, Google Drive 동기화, 멤버 공유, 알림, 다국어(한/영/일) 지원, 공휴일 표시 등 다양한 기능을 제공합니다. 자체 서버 없이 사용자 기기와 Google Drive에만 데이터가 저장됩니다.',
    ja: 'Noplanはスケジュール管理のクロスプラットフォームアプリです。Flutterで開発され、Android・iOSで利用できます。カレンダービュー、繰り返し予定、予定・アルバム管理、Google Drive同期、メンバー共有、通知、多言語(韓/英/日)対応、祝日表示など、さまざまな機能を提供しています。自社サーバーはなく、ユーザーの端末とGoogle Driveのみにデータが保存されます。',
    en: 'Noplan is a cross-platform schedule management app. Built with Flutter, it runs on Android and iOS. It offers calendar view, recurring events, event and album management, Google Drive sync, member sharing, notifications, multi-language (KR/EN/JP), holiday display, and more. No backend server—data is stored only on your device and in your Google Drive.',
  },
  developerTitle: {
    ko: '개발자',
    ja: '開発者',
    en: 'Developer',
  },
  developerText: {
    ko: '풀스택 엔지니어 황 석현입니다. 실무에서 백엔드는 Java, Node.js, 프론트엔드는 JavaScript, React, Vue.js를 주로 사용했습니다. 웹 개발에 한정되지 않고 Flutter, Swift 등 다양한 분야를 학습하고 있습니다.',
    ja: 'フルスタックエンジニアのファン・ソキョンです。実務ではバックエンドはJava・Node.js、フロントエンドはJavaScript・React・Vue.jsを主に使用してきました。Web開発に限定せず、FlutterやSwiftなど幅広い分野を学習しています。',
    en: 'Full-stack engineer hwang seokhyun. In practice, I mainly use Java and Node.js for backend, JavaScript, React, and Vue.js for frontend. I also study Flutter, Swift, and other areas beyond web development.',
  },
  developerLink: {
    ko: '자기소개 페이지 보기 →',
    ja: '自己紹介ページを見る →',
    en: 'View self-introduction page →',
  },
  footer: {
    ko: 'Noplan Developer Reference',
    ja: 'Noplan Developer Reference',
    en: 'Noplan Developer Reference',
  },
};

function getBrowserLang() {
  const lang = navigator.language || navigator.userLanguage || 'en';
  if (lang.startsWith('ja')) return 'ja';
  if (lang.startsWith('ko')) return 'ko';
  return 'en';
}

function applyTranslations() {
  const lang = getBrowserLang();
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const text = translations[key]?.[lang] ?? translations[key]?.en ?? el.textContent;
    el.textContent = text;
  });
}

document.addEventListener('DOMContentLoaded', applyTranslations);
