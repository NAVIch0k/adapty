export type CodeTab = {
  label: string;
  code: string;
  link: string;
};

export type FeatureQuote = {
  app: string;
  appIcon?: string;
  appLogo?: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

export const trustLogos = [
  "https://adapty.io/assets/uploads/2024/01/logo-feeld-gray.svg",
  "https://adapty.io/assets/uploads/2024/01/logo-bumble-gray.svg",
  "https://adapty.io/assets/uploads/2025/02/weewoo.svg",
  "https://adapty.io/assets/uploads/2025/02/AppNation.webp",
  "https://adapty.io/assets/uploads/2025/02/almus.svg",
  "https://adapty.io/assets/uploads/2024/01/logo-text-impala-studios-gray.svg",
  "https://adapty.io/assets/uploads/2024/01/logo-hubx-gray.svg",
];

export const helpCards = [
  {
    title: "Для разработчиков",
    image: "https://adapty.io/assets/uploads/2025/02/img-card-cover-sdk-install@2x.webp",
    bullets: [
      "Подписки SDK",
      "Сбережение на возвратах",
      "Удалённая конфигурация",
      "Резервные пейволлы",
    ],
    href: "https://adapty.io/ru/for-developers/",
  },
  {
    title: "Для владельцев",
    image: "https://adapty.io/assets/uploads/2025/02/img-card-cover-charts@2x.webp",
    bullets: ["Аналитика доходов", "Аналитика LTV", "Прогнозы ИИ для LTV и доходов"],
    href: "https://adapty.io/ru/for-app-owners/",
  },
  {
    title: "Для маркетологов",
    image: "https://adapty.io/assets/uploads/2025/02/img-card-cover-paywalls@2x.webp",
    bullets: ["A/B тестирование", "Конструктор без кода", "Локализации", "Ориентирование"],
    href: "https://adapty.io/ru/for-marketers/",
  },
];

export const slaStats = [
  { value: "$2 млрд.", label: "обрабатываемого дохода" },
  { value: "99.99%", label: "времени безотказной работы" },
  { value: "2.5 млрд.", label: "обслуживаемых пользователей" },
  { value: "60 млрд.", label: "обращений к API / месяц" },
];

export const codeTabs: CodeTab[] = [
  {
    label: "Swift",
    link: "https://github.com/adaptyteam/AdaptySDK-iOS",
    code: `import Adapty

do {
  try await Adapty.activate("PUBLIC_SDK_KEY")

  // Make a purchase, Adapty handles the rest
  let purchaseResult = try await Adapty.makePurchase(product)
  // successful purchase
} catch {
  // handle the error
}
`,
  },
  {
    label: "Kotlin",
    link: "https://github.com/adaptyteam/AdaptySDK-Android",
    code: `Adapty.activate(this, AdaptyConfig.Builder("YOUR_APP_KEY").build())

// Make a purchase, Adapty handles the rest
Adapty.makePurchase(activity, product) { result ->
  when (result) {
    is AdaptyResult.Success -> {
      if (result.value is AdaptyPurchaseResult.Success)
        // successful purchase
    }
    is AdaptyResult.Error -> {
      // handle the error
    }
  }
}
`,
  },
  {
    label: "React Native",
    link: "https://github.com/adaptyteam/AdaptySDK-React-Native",
    code: `import { adapty } from 'react-native-adapty';
await adapty.activate('YOUR_APP_KEY');

// Make a purchase, Adapty handles the rest
try {
  const profile = await adapty.makePurchase(product);
  // successful purchase
} catch (error) {
  // handle the error
}
`,
  },
  {
    label: "Flutter",
    link: "https://github.com/adaptyteam/AdaptySDK-Flutter",
    code: `import 'package:adapty_flutter/adapty_flutter.dart';

try {
  await Adapty().activate();

  // Make a purchase, Adapty handles the rest
  final purchaseResult = await Adapty().makePurchase(product: product);
  // successful purchase
} on AdaptyError catch (adaptyError) {
  // handle the error
} catch (error) {
  // handle other errors
}
`,
  },
  {
    label: "Unity",
    link: "https://github.com/adaptyteam/AdaptySDK-Unity",
    code: `using AdaptySDK;

Adapty.makePurchase(product, (profile, error) => {
  if (error == null) {
    // successful purchase
  }
});
`,
  },
];

export const sdkPlatforms = [
  {
    label: "Swift SDK",
    href: "https://adapty.io/ru/sdk/ios/",
    icon: "https://adapty.io/assets/uploads/2024/01/icon-swift-64x64-1.svg",
  },
  {
    label: "Kotlin SDK",
    href: "https://adapty.io/ru/sdk/android/",
    icon: "https://adapty.io/assets/uploads/2024/01/icon-kotlin-64x64-1.svg",
  },
  {
    label: "React Native SDK",
    href: "https://adapty.io/ru/sdk/react-native/",
    icon: "https://adapty.io/assets/uploads/2024/01/icon-react-native-64x64-1.svg",
  },
  {
    label: "Unity SDK",
    href: "https://adapty.io/ru/sdk/unity/",
    icon: "https://adapty.io/assets/uploads/2024/01/icon-unity-white-64x64-1.svg",
  },
  {
    label: "Flutter SDK",
    href: "https://adapty.io/ru/sdk/flutter/",
    icon: "https://adapty.io/assets/uploads/2024/01/icon-flutter-64x64-1.svg",
  },
  {
    label: "Capacitor SDK",
    href: "https://adapty.io/ru/sdk/capacitor/",
    icon: "https://adapty.io/assets/uploads/2025/10/capacitor-logo.svg",
  },
  {
    label: "Kotlin Multiplatform",
    href: "https://adapty.io/ru/sdk/kmp/",
    icon: "https://adapty.io/assets/uploads/2025/10/kmp-logo.svg",
  },
  {
    label: "FlutterFlow",
    href: "https://adapty.io/ru/sdk/flutterflow/",
    icon: "https://adapty.io/assets/uploads/2024/09/icon-flutterflow-64x64-1.svg",
  },
  {
    label: "Web API",
    href: "https://adapty.io/ru/sdk/web/",
    icon: "https://adapty.io/assets/uploads/2024/01/icon-web-64x64-1.svg",
  },
  {
    label: "Stripe",
    href: "https://adapty.io/ru/integrations/stripe/",
    icon: "https://adapty.io/assets/uploads/2024/02/icon-stripe-64x64-1.svg",
  },
];

export const featureQuotes: Array<{
  heading: string;
  desc: string;
  cta: string;
  href: string;
  image: string;
  quote: FeatureQuote;
  reversed?: boolean;
}> = [
  {
    heading: "Тестируйте пейволлы без релизов приложения",
    desc: "Управляйте пейволлами, таргетируйте их, локализуйте и персонализируйте не выходя из браузера.",
    cta: "Больше про A/B-тесты",
    href: "https://adapty.io/ru/paywall-ab-testing/",
    image: "https://adapty.io/assets/uploads/2025/05/paywall-ab-testing@2x.webp",
    quote: {
      app: "Smartist",
      appLogo: "https://adapty.io/assets/uploads/2024/03/logo-smartist-black@2x.png",
      quote:
        "«Будь то A/B-тестирование пейволлов, прогнозирование LTV или анализ показателей подписки, Adapty — это идеальный набор инструментов для роста приложения».",
      author: "Ильгар Тали",
      role: "Основатель и директор по позиционированию",
      avatar: "https://adapty.io/assets/uploads/2024/02/Ilgar-Tali-Smartist@2x.webp",
    },
  },
  {
    heading: "Сократите ставку возврата на 40%",
    desc: "Перестаньте терять доход из-за возвратов – Adapty автоматически делится данными о действиях пользователей с Apple для запросов на возврат и уменьшает их.",
    cta: "Настройка Refund Saver",
    href: "https://adapty.io/ru/refund-saver/",
    image: "https://adapty.io/assets/uploads/2025/05/refund-rate@2x-1024x768.webp",
    reversed: true,
    quote: {
      app: "Fotorama",
      appIcon: "https://adapty.io/assets/uploads/2024/12/app-icon-fotorama-original.webp",
      quote:
        "“Я никогда не думала, что возврат денег может иметь такое значение. Мы просто щелкнули выключателем, настроили его, и вдруг нам показалось, что мы перестали позволять деньгам ускользать”.",
      author: "Берк Чагатай Албайрак",
      role: "Старший менеджер по продуктам",
      avatar: "https://adapty.io/assets/uploads/2024/12/avatar-berk-cagatay-gray@3x.webp",
    },
  },
  {
    heading: "Смотрите показатели подписок в любой момент",
    desc: "Следите за экономикой приложения в реальном времени, используя готовую систему аналитики с более чем 20 показателями.",
    cta: "Больше об аналитике",
    href: "https://adapty.io/ru/ltv-analytics/",
    image: "https://adapty.io/assets/uploads/2024/01/app-monetization-strategies@2x.webp",
    quote: {
      app: "Moonly",
      appIcon: "https://adapty.io/assets/uploads/2023/12/app_icon_Moonly.svg",
      quote:
        "«Аналитика Adapty предоставляет неоценимые сведения об успешности нашего приложения. Благодаря подробным показателям дохода, оттока и ARPU, мы принимаем обоснованные решения для оптимизации нашей финансовой стратегии.»",
      author: "Николай Чеботарев",
      role: "Руководитель UA в Moonly.app",
      avatar: "https://adapty.io/assets/uploads/2024/02/Nikolay.png",
    },
  },
  {
    heading: "Конструктор пейволлов",
    desc: "Создавайте красивые нативные пейволлы для iOS, Android, Flutter и React Native без единой строчки кода.",
    cta: "Больше о создании пейволлов",
    href: "https://adapty.io/ru/paywall-builder/",
    image: "https://adapty.io/assets/uploads/2024/01/no-code-paywall-builder@2x.webp",
    reversed: true,
    quote: {
      app: "Moodworks Inc",
      appIcon: "https://adapty.io/assets/uploads/2024/02/app-icon-cat.png",
      quote:
        "«Конструктор пейволлов и инструменты A/B-тестирования Adapty в сочетании друг с другом — это революция для всех, кто пытается проводить много тестов и находить быстрые выигрышные решения.»",
      author: "Майк МакСуини",
      role: "Директор по продукту",
      avatar: "https://adapty.io/assets/uploads/2024/02/Mike-McSweeney-Moodworks-inc@2x.webp",
    },
  },
];

export const integrations = [
  "https://adapty.io/assets/uploads/2024/02/logo-airbridge.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-adjust.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-amazon-s3.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-amplitude.svg",
  "https://adapty.io/assets/uploads/2024/04/icon-apple-ads-text.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-appsflyer.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-appmetrica.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-asapty.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-branch.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-braze.svg",
  "https://adapty.io/assets/uploads/2024/04/logo-facebook-blue-text.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-firebase-and-ga.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-google-cloud-storage.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-mixpanel.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-onesignal.svg",
  "https://adapty.io/assets/uploads/2025/02/posthog-logo-colorfull.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-pushwoosh.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-split-metrics.svg",
  "https://adapty.io/assets/uploads/2025/04/singular-logo-block.svg",
  "https://adapty.io/assets/uploads/2024/04/icon-stripe-logo.svg",
  "https://adapty.io/assets/uploads/2025/02/tenjin_logo_color.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-webhook.svg",
];

export const testimonials = [
  {
    name: "Джем Ортабаш",
    role: "Соучредитель и генеральный директор, HubX",
    quote:
      "«Миграция с RevenueCat была не легким решением для нас. Мы выбрали Adapty, потому что верим, что они - лучший партнер для нашего роста. Оглядываясь назад, это было правильное решение. Несмотря на некоторые сложности, команда Adapty всегда была рядом, чтобы помочь нам во время миграции и после, и их поддержка на высшем уровне. Я рекомендую Adapty как надежного партнера.»",
    avatar: "https://adapty.io/assets/uploads/2023/12/photo-Cem-Ortabas.webp",
    logo: "https://adapty.io/assets/uploads/2023/12/logo-HabX-white.svg",
  },
  {
    name: "Крис Бик",
    role: "Основатель и генеральный директор, Bickster",
    quote:
      "«Мы работаем с Adapty с 2021 года, и я не мог бы быть более счастливым от этого. Мы пробовали другие платформы управления подписками в прошлом, так что могу сравнить. Adapty представила множество функций на протяжении лет и постоянно помогала нам расти. У них лучшие аналитические инструменты на рынке и все интеграции, о которых вы можете подумать. Если вы хотите увеличить доход вашего приложения, я определенно рекомендую Adapty.»",
    avatar: "https://adapty.io/assets/uploads/2023/12/photo-Chris-Bick.webp",
    logo: "https://adapty.io/assets/uploads/2023/12/logo-bickster.png",
  },
  {
    name: "Ялчын Оздемир",
    role: "Основатель и генеральный директор, AppNation",
    quote:
      "«Мы выбрали Adapty за мощные возможности A/B тестирования пейволлов, которые помогли нам эффективно оптимизировать нашу стратегию монетизации. Удобная платформа, гибкое ценообразование и исключительная поддержка клиентов делают Adapty превосходным выбором по сравнению с конкурентами.»",
    avatar: "https://adapty.io/assets/uploads/2024/02/Asman.webp",
    logo: "https://adapty.io/assets/uploads/2024/02/logo-AppNation-white.png",
  },
  {
    name: "Кайл Смит",
    role: "Руководитель отдела данных в Smitten Dating",
    quote:
      "«Платформа Adapty позволяет неразработчикам легко создавать и управлять A/B тестами, пейволлами, ассортиментом продуктов и ценовой структурой. У них есть отличный внешний API, который облегчает передачу связанных событий в другие аналитические инструменты, такие как Amplitude и Mixpanel.»",
    avatar: "https://adapty.io/assets/uploads/2024/02/Kyle2.webp",
    logo: "https://adapty.io/assets/uploads/2024/02/Smitten_Color-Logo-Small-02.webp",
  },
  {
    name: "Рой Мулия",
    role: "Основатель и генеральный директор, SocialKit",
    quote:
      "«Мы протестировали более трехсот пейволлов за четыре месяца. Adapty позволяет тестировать практически любой элемент пейволла, и мы воспользовались этим. Мы протестировали всё: продукты, текст заголовка, кнопки CTA, изображения, видео и т.д. Благодаря A/B тестированию Adapty, мы смогли удвоить наш месячный доход. Я не был уверен, что один инструмент может оказать такое влияние, но я стал свидетелем этого сам.»",
    avatar: "https://adapty.io/assets/uploads/2023/12/photo-Roi-Mulia.webp",
    logo: "https://adapty.io/assets/uploads/2024/02/logo-social-white.svg",
  },
];

export const enterpriseColumns = [
  {
    title: "Безопасность",
    items: [
      "Сертификация SOC2",
      "Шифрование данных",
      "Круглосуточный мониторинг мошенничества",
    ],
  },
  {
    title: "Надежность",
    items: [
      "99.99% SLA",
      "$500 млн. в год обработанных платежей в приложениях",
    ],
  },
  {
    title: "Отзывчивость",
    items: [
      "Выделенный менеджер по работе с клиентами",
      "Прямая связь через Slack",
      "Онлайн-чат на сайте",
      "Четыре способа связаться с нами",
    ],
  },
];

export const awards = [
  "https://adapty.io/assets/uploads/2025/03/g2-best_results-winter_2025.svg",
  "https://adapty.io/assets/uploads/2025/03/g2-high_performer-winter_2025.svg",
  "https://adapty.io/assets/uploads/2025/03/g2-best_usability-winter_2025.svg",
  "https://adapty.io/assets/uploads/2025/03/g2-best_relationship-winter_2025.svg",
  "https://adapty.io/assets/uploads/2025/03/g2-most_implementable-winter_2025.svg",
];

export const caseStudies = [
  {
    title: "Productivity app",
    category: "Продуктивность",
    metric: "+50% общей выручки",
    desc: "Как ценовые тесты раскрыли потенциал",
    icon: "https://adapty.io/assets/uploads/2025/12/app-icon-productivity-app@4x.webp",
    href: "/case-studies/productivity-app-and-autopilot/",
  },
  {
    title: "Text on Pic",
    category: "Фото и видео",
    metric: "Рост MRR более 30%",
    desc: "Как увеличить доход с помощью правильных тестов",
    icon: "https://adapty.io/assets/uploads/2025/12/app-icon-text-on-pic@3x.webp",
    href: "/case-studies/photo-editing-app-and-autopilot/",
  },
  {
    title: "Trip planning",
    category: "Путешествия",
    metric: "+102% рост ARPU",
    desc: "Новая онбординг удвоила доход с пользователя",
    icon: "https://adapty.io/assets/uploads/2025/11/logo-secret-app@3x.webp",
    href: "/case-studies/travel-app/",
  },
  {
    title: "Going Merry",
    category: "Издатель приложения",
    metric: "Рост MRR в 5 раз",
    desc: "Как масштабировать доход от подписок с помощью Paywall Builder",
    icon: "https://adapty.io/assets/uploads/2025/09/going-merry-app-logo.webp",
    href: "/case-studies/going-merry/",
  },
  {
    title: "Shmoody",
    category: "Ментальное здоровье",
    metric: "ARR вырос с $0 до $2M",
    desc: "Как вырасти от бесплатного приложения до $2M ARR с Adapty",
    icon: "https://adapty.io/assets/uploads/2025/05/app-logo-shmoody.webp",
    href: "/case-studies/shmoody/",
  },
  {
    title: "Lively",
    category: "Здоровье и фитнес",
    metric: "На 83% меньше возвратов",
    desc: "Сэкономлено 82% потенциально дохода",
    icon: "https://adapty.io/assets/uploads/2025/04/app-logo-lively@2x.png",
    href: "/case-studies/lively/",
  },
  {
    title: "Glam AI",
    category: "Макияж и красота",
    metric: "ROAS от Adapty – 108%",
    desc: "До 1.2 млн долларов в год за 3 месяца",
    icon: "https://adapty.io/assets/uploads/2025/03/app-logo-glam-ai.webp",
    href: "/case-studies/glam-ai/",
  },
  {
    title: "Pepapp",
    category: "Здоровье и фитнес",
    metric: "Окупаемость – 400%",
    desc: "Как сделать Adapty бесплатным с помощью Refund Saver",
    icon: "https://adapty.io/assets/uploads/2025/01/Pepapp-icon@2x.webp",
    href: "/case-studies/pepapp/",
  },
  {
    title: "Fotorama",
    category: "Фото и Видео",
    metric: "-40% возвратов",
    desc: "Как снизить уровень возвратов с помощью Adapty",
    icon: "https://adapty.io/assets/uploads/2024/12/app-icon-fotorama-original.webp",
    href: "/case-studies/fotorama/",
  },
];
