(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  63831,
  (e) => {
    e.v({
      options: "LanguageProvider-module__WgRcjW__options",
      trigger: "LanguageProvider-module__WgRcjW__trigger",
    });
  },
  47805,
  (e) => {
    "use strict";
    var t = e.i(43476),
      a = e.i(71645);
    e.i(47167);
    let r = {
      common: {
        language: "Ngôn ngữ",
        loading: "đang mở món quà…",
        musicOff: "Tắt nhạc nền",
        musicOn: "Bật nhạc nền",
        recipient: "Chị",
        sender: "Em",
        photo: "Ảnh kỷ niệm",
      },
      unlock: {
        eyebrow: "CÓ MỘT MÓN QUÀ",
        countdownLead: "món quà này chưa mở được đâu. còn",
        countdownTail: "nữa thôi.",
        days: "ngày",
        hours: "giờ",
        minutes: "phút",
        seconds: "giây",
        ready: "tới giờ rồi đấy 🎁",
        open: "mở món quà",
        dateLead: "món quà này được khoá bằng ngày sinh của chị.",
        dateHint: "nhập ngày sinh để mở nhé",
        dateLabel: "Ngày sinh của chị",
        dateSubmit: "mở khoá",
        dateWrong: "chưa đúng rồi. thử lại xem 🤍",
        dateEmpty: "nhập ngày sinh đã nhé",
      },
      dark: { hint: "ở đây tối quá…", action: "chị thử gạt công tắc đèn đi" },
      surprise: {
        eyebrow: "BẤT NGỜ CHƯA!!",
        title: "CHÚC MỪNG SINH NHẬT",
        subtitle: "hôm nay là ngày của chị 🎉",
        ageLine: "tròn {age} tuổi",
        next: "tiếp nào 🎈",
      },
      voice: {
        line: "có người để lại giọng nói cho chị đấy.",
        hint: "kéo kim máy lên đĩa than để phát",
        hintReduced: "chạm để phát",
        playing: "đang phát… nghe hết nhé",
        done: "tiếp ✨",
        skip: "bỏ qua đã",
        armAria: "cần kim — kéo lên đĩa than",
      },
      cake: {
        enter: "giờ tới phần quan trọng nhất 🎂",
        lighting: "suỵt… nến đang được thắp 🔥",
        inviteHold: "nhấn giữ để thổi nến — từ từ thôi",
        almostThere: "sắp được rồi…",
        keepHolding: "cố lên… đừng buông tay 🌬️",
        pressHold: "nhấn giữ vào bánh kem",
        extinguished: (e, t) => `đ\xe3 tắt ${e}/${t} ngọn nến`,
      },
      wish: {
        line: "giờ thì… ước một điều. nhắm mắt lại, cứ từ từ.",
        hold: "giữ tay trên màn hình trong lúc ước",
        done: "điều ước vừa theo những vì sao gửi lên trời rồi đó… mong một ngày, nó sẽ thành sự thật 🌠",
        aria: "giữ để ước",
      },
      letter: {
        line: "còn một điều nữa từ {sender} 💌",
        hint: "chạm vào cuộn giấy để mở thư",
        next: "tiếp ✨",
        locationTitle: "Bữa tiệc ở đây",
        connector: "gửi",
      },
      bloom: {
        caption: "những khoảnh khắc này, giờ là của chị rồi.",
        next: "điều cuối cùng ✨",
      },
      lightbox: {
        close: "Đóng ảnh",
        prev: "Ảnh trước",
        nextPhoto: "Ảnh sau",
        open: (e) => `Xem lớn: ${e}`,
        counter: (e, t) => `${e} / ${t}`,
      },
      share: {
        eyebrow: "GỬI CHỊ 🤍",
        title: "mong điều ước chị vừa viết sẽ thành sự thật trong năm nay nhé",
        download: "Tải ảnh Polaroid",
        downloading: "đang chuẩn bị…",
        downloadFailed: "Ôi, tải không được rồi. Chụp màn hình cũng được mà 🤍",
        savedMobileHint: "đã tải rồi nhé — nhấn giữ ảnh để lưu vào thư viện 🤍",
        restart: "xem lại bữa tiệc 🎈",
        outro:
          "cảm ơn chị đã đi cùng tới tận khoảnh khắc này — sinh nhật thật vui nhé 🤍",
      },
      keepsake: {
        eyebrow: "TIỆC BẤT NGỜ",
        stamp: "chính thức bước sang tuổi mới 🎂",
        wishPrompt: "tới lượt chị — viết điều ước cho năm tới nhé ✍️",
        wishPlaceholder:
          "vd. năm nay mình mong sẽ dũng cảm hơn với ước mơ của chính mình…",
        wishRequired: "viết điều ước ở trên đã, rồi mới đi tiếp được ✨",
        wishHeader: "điều ước của mình năm nay ✨",
        replyAttach: "Đính vào món quà 💌",
        sendWa: "Gửi thiệp cho {sender} 💌",
        replyMsg: "Cảm ơn chị 🥹 hôm nay mình thấy được yêu thương thật sự.",
        bouquet: "giữ lại tấm này ✨",
        preparing: "đang chuẩn bị…",
        chatWa: "Nhắn tin WhatsApp",
        ageLine: (e) => `ch\xednh thức ${e} tuổi`,
        waWishTag: "điều ước của mình năm nay ✨",
        footerDefault: "được chúc mừng bởi người thương",
        noteDefault: "hôm nay chị chính thức được chúc mừng.",
        restart: "xem lại bữa tiệc 🎈",
        shareTitle: "Ảnh Polaroid Bữa Tiệc",
      },
      letterBodyFallback:
        "Chúc mừng sinh nhật chị. Mong năm nay sẽ dịu dàng hơn năm cũ — và mong chị luôn biết rằng có người đang chúc mừng chị.",
      finalNoteFallback:
        "Một bó hoa nhỏ khép lại, dành cho người có sinh nhật hôm nay.",
    };
    function n(e, t) {
      return e.replace(/\{(\w+)\}/g, (e, a) => {
        let r = t[a];
        return void 0 === r ? e : r;
      });
    }
    function s(e, t, a) {
      let r = RegExp(`(?<![\\p{L}\\p{M}])${t}(?![\\p{L}\\p{M}])`, "giu");
      return e.replace(r, (e) =>
        (function (e, t) {
          if (e === e.toUpperCase() && e !== e.toLowerCase())
            return t.toUpperCase();
          let a = e.charAt(0);
          return a === a.toUpperCase() && a !== a.toLowerCase()
            ? t.charAt(0).toUpperCase() + t.slice(1)
            : t;
        })(e, a),
      );
    }
    let o = (0, a.createContext)(r),
      i = o.Provider;
    function l() {
      return (0, a.useContext)(o);
    }
    function c(e) {
      let t = Number(e.split("-")[0]);
      return t ? String(new Date().getFullYear() - t) : "";
    }
    let d = "2006-09-12",
      u = {
        recipientName: "",
        senderName: "",
        age: c(d),
        birthdayDate: d,
        letterBody: "",
        photos: [
          {
            src: "/birthday/images/people/photo-01.jpeg",
            alt: "Cô gái đeo kính đưa tay che mặt cười, bên cạnh là bánh kem cắm nến lấp lánh và một bó hồng đỏ.",
            caption: "cái mặt giấu sau bàn tay ấy 🤍",
          },
          {
            src: "/birthday/images/people/photo-02.jpeg",
            alt: "Cô gái nấp sau bó hướng dương, phía trước là bánh kem dâu tây với sáu ngọn nến đang cháy.",
            caption: "hướng dương với sáu ngọn nến",
          },
          {
            src: "/birthday/images/people/photo-03.jpeg",
            alt: "Hai bàn tay chắp lại ước, trước mặt là bánh kem dâu tây thắp một ngọn nến.",
            caption: "lúc đang ước ấy",
          },
          {
            src: "/birthday/images/people/photo-04.jpeg",
            alt: "Bánh kem nhỏ thắt nơ trắng với một ngọn nến, đặt giữa những bó hoa trắng.",
            caption: "một ngọn nến là đủ rồi",
          },
          {
            src: "/birthday/images/people/photo-05.jpeg",
            alt: "Cô gái bưng bánh kem hồng cắm đầy nến, đứng giữa vòm cây xanh.",
            caption: "bưng cả bữa tiệc trên tay",
          },
        ],
        unlockMode: "none",
        finalNote: r.finalNoteFallback,
        ...globalThis.BIRTHDAY_CONFIG,
      },
      m = {
        "en-GB": [
          "hiding a smile behind her hand 🤍",
          "sunflowers and six candles",
          "making a wish",
          "one candle is enough",
          "holding a whole party in her hands",
        ],
        "en-US": [
          "hiding a smile behind her hand 🤍",
          "sunflowers and six candles",
          "making a wish",
          "one candle is enough",
          "holding a whole party in her hands",
        ],
        "zh-CN": [
          "藏在手后的笑容 🤍",
          "向日葵和六根蜡烛",
          "正在许愿",
          "一根蜡烛就够了",
          "把整场派对捧在手里",
        ],
        ko: [
          "손 뒤에 숨긴 미소 🤍",
          "해바라기와 여섯 개의 촛불",
          "소원을 비는 순간",
          "촛불 하나면 충분해",
          "두 손에 담은 파티",
        ],
        ja: [
          "手の後ろに隠れた笑顔 🤍",
          "ひまわりと六本のろうそく",
          "願い事をしている瞬間",
          "ろうそくは一本で十分",
          "パーティーを両手に抱えて",
        ],
        de: [
          "ein hinter der Hand verstecktes Lächeln 🤍",
          "Sonnenblumen und sechs Kerzen",
          "beim Wünschen",
          "eine Kerze reicht",
          "eine ganze Party in ihren Händen",
        ],
        fr: [
          "un sourire caché derrière sa main 🤍",
          "des tournesols et six bougies",
          "au moment de faire un vœu",
          "une seule bougie suffit",
          "toute une fête entre ses mains",
        ],
        pl: [
          "uśmiech ukryty za dłonią 🤍",
          "słoneczniki i sześć świeczek",
          "chwila na życzenie",
          "jedna świeczka wystarczy",
          "całe przyjęcie w jej dłoniach",
        ],
      };
    var p = e.i(63831);
    let h = [
        ["vi", "Tiếng Việt"],
        ["en-GB", "English (UK)"],
        ["en-US", "English (US)"],
        ["zh-CN", "简体中文"],
        ["ko", "한국어"],
        ["ja", "日本語"],
        ["de", "Deutsch"],
        ["fr", "Français"],
        ["pl", "Polski"],
      ],
      f = {
        common: "language|loading|musicOff|musicOn|recipient|sender|photo",
        unlock:
          "eyebrow|countdownLead|countdownTail|days|hours|minutes|seconds|ready|open|dateLead|dateHint|dateLabel|dateSubmit|dateWrong|dateEmpty",
        dark: "hint|action",
        surprise: "eyebrow|title|subtitle|ageLine|next",
        voice: "line|hint|hintReduced|playing|done|skip|armAria",
        cake: "enter|lighting|inviteHold|almostThere|keepHolding|pressHold|extinguished",
        wish: "line|hold|done|aria",
        letter: "line|hint|next|locationTitle|connector",
        bloom: "caption|next",
        lightbox: "close|prev|nextPhoto|open|counter",
        share:
          "eyebrow|title|download|downloading|downloadFailed|savedMobileHint|restart|outro",
        keepsake:
          "eyebrow|stamp|wishPrompt|wishPlaceholder|wishRequired|wishHeader|replyAttach|sendWa|replyMsg|bouquet|preparing|chatWa|ageLine|waWishTag|footerDefault|noteDefault|restart|shareTitle",
        fallback: "letterBodyFallback|finalNoteFallback",
      },
      g = {
        common:
          "Language|opening your gift…|Mute music|Play music|You|Me|A memory",
        unlock:
          "A GIFT FOR YOU|this gift opens in|to go.|days|hours|minutes|seconds|it's time 🎁|open your gift|your birthday is the key to this gift.|enter your date of birth to open it|Your date of birth|unlock|not quite. try again 🤍|enter your date of birth first",
        dark: "it's so dark in here…|try switching on the light",
        surprise:
          "SURPRISE!!|HAPPY BIRTHDAY|today is your day 🎉|turning {age}|let's go 🎈",
        voice:
          "someone left a voice message for you.|drag the needle onto the record to play|tap to play|playing… listen to the end|next ✨|skip for now|tonearm — drag onto the record",
        cake: "now for the most important part 🎂|shh… lighting the candles 🔥|press and hold to blow out the candles — take your time|almost there…|keep going… don't let go 🌬️|press and hold the cake|{out}/{total} candles blown out",
        wish: "now… make a wish. close your eyes, take your time.|keep holding the screen while you wish|your wish has flown to the stars… may it come true one day 🌠|hold to make a wish",
        letter:
          "one more thing. this is from {sender} 💌|tap the scroll to open the letter|next ✨|The party is here|to",
        bloom: "these moments are yours to keep now.|one last thing ✨",
        lightbox:
          "Close photo|Previous photo|Next photo|Enlarge: {alt}|{current} / {total}",
        share:
          "FOR YOU 🤍|may the wish you just wrote come true this year|Download Polaroid|getting it ready…|Couldn't download. A screenshot works too 🤍|downloaded — hold the image to save it to your photos 🤍|replay the party 🎈|thank you for staying until this moment — have a lovely birthday 🤍",
        keepsake:
          "SURPRISE PARTY|officially a year older 🎂|your turn — write a wish for the year ahead ✍️|e.g. this year I hope to be braver about my dreams…|write your wish above before continuing ✨|my wish for this year ✨|Attach to the gift 💌|Send a card to {sender} 💌|Thank you 🥹 I feel so loved today.|keep this moment ✨|getting it ready…|Chat on WhatsApp|officially {age}|my wish for this year ✨|celebrated by {sender} 🤍|today, you are officially celebrated.|replay the party 🎈|Birthday Party Polaroid",
        fallback:
          "Happy birthday. May this year be gentler than the last — and may you always know someone is celebrating you.|A little bouquet to end with, for the birthday person.",
      },
      b = {
        vi: r,
        ...Object.fromEntries(
          Object.entries({
            "en-GB": g,
            "en-US": {
              ...g,
              share: g.share.replace(
                "have a lovely birthday",
                "have a wonderful birthday",
              ),
            },
            "zh-CN": {
              common: "语言|正在打开礼物…|关闭音乐|播放音乐|你|我|一段回忆",
              unlock:
                "有一份礼物|距离礼物开启还有|就到了。|天|小时|分钟|秒|时间到了 🎁|打开礼物|你的生日就是打开礼物的钥匙。|输入出生日期来打开吧|你的出生日期|解锁|还不对，再试一次 🤍|请先输入出生日期",
              dark: "这里好暗呀…|试着打开灯吧",
              surprise:
                "惊喜！！|生日快乐|今天是属于你的日子 🎉|满 {age} 岁啦|继续吧 🎈",
              voice:
                "有人为你留下了一段语音。|将唱针拖到唱片上播放|轻触播放|正在播放…听完哦|继续 ✨|先跳过|唱臂——拖到唱片上",
              cake: "现在到了最重要的环节 🎂|嘘…正在点蜡烛 🔥|长按吹灭蜡烛——慢慢来|快成功了…|加油…别松手 🌬️|长按蛋糕|已吹灭 {out}/{total} 根蜡烛",
              wish: "现在…许个愿吧。闭上眼睛，慢慢来。|许愿时请按住屏幕|你的愿望已经飞向星空…愿有一天它会实现 🌠|长按许愿",
              letter:
                "还有一件事。这是 {sender} 送来的 💌|轻触卷轴打开信|继续 ✨|派对在这里|致",
              bloom: "这些瞬间，现在都属于你了。|最后一件事 ✨",
              lightbox:
                "关闭照片|上一张照片|下一张照片|放大：{alt}|{current} / {total}",
              share:
                "送给你 🤍|愿你刚写下的愿望在今年成真|下载拍立得照片|正在准备…|下载失败了，截屏也可以哦 🤍|已下载——长按图片保存到相册 🤍|重温派对 🎈|谢谢你陪伴到这一刻——生日快乐 🤍",
              keepsake:
                "惊喜派对|正式长大一岁啦 🎂|轮到你啦——写下新一年的愿望 ✍️|例如：今年希望自己能更勇敢地追逐梦想…|请先在上方写下愿望再继续 ✨|我今年的愿望 ✨|附在礼物上 💌|给 {sender} 发贺卡 💌|谢谢你 🥹 今天我感受到了满满的爱。|留住这一刻 ✨|正在准备…|通过 WhatsApp 聊天|正式 {age} 岁啦|我今年的愿望 ✨|来自 {sender} 的祝福 🤍|今天，你是被祝福的主角。|重温派对 🎈|生日派对拍立得照片",
              fallback:
                "生日快乐。愿今年比去年更温柔，也愿你始终知道，有人在为你庆祝。|最后送上一小束花，献给今天过生日的你。",
            },
            ko: {
              common:
                "언어|선물을 여는 중…|배경 음악 끄기|배경 음악 켜기|너|나|추억 사진",
              unlock:
                "선물이 도착했어요|선물을 열기까지|남았어요.|일|시간|분|초|시간이 됐어요 🎁|선물 열기|생일이 이 선물을 여는 열쇠예요.|생년월일을 입력해 주세요|생년월일|잠금 해제|아직 아니에요. 다시 해 봐요 🤍|먼저 생년월일을 입력해 주세요",
              dark: "여기 너무 어둡다…|불을 켜 볼래?",
              surprise:
                "깜짝이야!!|생일 축하해|오늘은 너의 날이야 🎉|이제 {age}살|계속 가자 🎈",
              voice:
                "누군가 너에게 음성 메시지를 남겼어.|바늘을 레코드 위로 끌어서 재생해 봐|눌러서 재생|재생 중… 끝까지 들어 줘|다음 ✨|일단 건너뛰기|톤암 — 레코드 위로 끌기",
              cake: "이제 가장 중요한 순간이야 🎂|쉿… 촛불을 켜는 중이야 🔥|길게 눌러 촛불을 꺼 봐 — 천천히|거의 다 됐어…|조금만 더… 손을 떼지 마 🌬️|케이크를 길게 누르기|촛불 {out}/{total}개를 껐어요",
              wish: "이제… 소원을 빌어 봐. 눈을 감고 천천히.|소원을 비는 동안 화면을 누르고 있어 줘|네 소원이 별들을 따라 하늘로 올라갔어… 언젠가 꼭 이루어지길 🌠|길게 눌러 소원 빌기",
              letter:
                "하나 더 있어. {sender}에게서 온 거야 💌|두루마리를 눌러 편지 열기|다음 ✨|파티는 여기서|받는 사람",
              bloom: "이 순간들은 이제 너의 것이야.|마지막 하나 ✨",
              lightbox:
                "사진 닫기|이전 사진|다음 사진|크게 보기: {alt}|{current} / {total}",
              share:
                "너에게 🤍|방금 적은 소원이 올해 꼭 이루어지길|폴라로이드 다운로드|준비 중…|다운로드하지 못했어. 화면을 캡처해도 좋아 🤍|다운로드했어 — 사진을 길게 눌러 앨범에 저장해 🤍|파티 다시 보기 🎈|이 순간까지 함께해 줘서 고마워 — 행복한 생일 보내 🤍",
              keepsake:
                "깜짝 파티|한 살 더 자랐어요 🎂|네 차례야 — 앞으로 일 년의 소원을 적어 봐 ✍️|예: 올해는 내 꿈을 향해 더 용기 있게 나아가고 싶어…|계속하기 전에 위에 소원을 적어 줘 ✨|올해 나의 소원 ✨|선물에 첨부하기 💌|{sender}에게 카드 보내기 💌|고마워 🥹 오늘 정말 사랑받는 기분이야.|이 순간 간직하기 ✨|준비 중…|WhatsApp으로 대화하기|이제 {age}살|올해 나의 소원 ✨|{sender}의 축하를 담아 🤍|오늘은 너를 위한 축하의 날이야.|파티 다시 보기 🎈|생일 파티 폴라로이드",
              fallback:
                "생일 축하해. 올해는 작년보다 더 다정한 한 해가 되길, 그리고 누군가 늘 너를 축하하고 있다는 걸 잊지 않길 바라.|오늘 생일을 맞은 너에게 마지막으로 작은 꽃다발을 보내.",
            },
            ja: {
              common:
                "言語|プレゼントを開いています…|音楽をオフにする|音楽をオンにする|あなた|私|思い出の写真",
              unlock:
                "プレゼントが届いています|プレゼントを開けるまで、あと|です。|日|時間|分|秒|時間になったよ 🎁|プレゼントを開ける|あなたの誕生日が、このプレゼントの鍵だよ。|生年月日を入力してね|生年月日|ロックを解除|まだ違うみたい。もう一度 🤍|まず生年月日を入力してね",
              dark: "ここ、真っ暗だね…|明かりをつけてみて",
              surprise:
                "サプライズ！！|お誕生日おめでとう|今日はあなたの日だよ 🎉|{age}歳になったね|次へ 🎈",
              voice:
                "あなたへの声のメッセージが届いているよ。|針をレコードの上にドラッグして再生|タップして再生|再生中…最後まで聴いてね|次へ ✨|今はスキップ|トーンアーム — レコードの上にドラッグ",
              cake: "いよいよ一番大切な時間だよ 🎂|しーっ…ろうそくを灯しているよ 🔥|長押しでろうそくを吹き消してね — ゆっくりでいいよ|もう少し…|そのまま…手を離さないで 🌬️|ケーキを長押し|ろうそくを {out}/{total} 本消したよ",
              wish: "さあ…願い事をしてね。目を閉じて、ゆっくり。|願っている間は画面を押し続けてね|願いが星と一緒に空へ届いたよ…いつか叶いますように 🌠|長押しで願い事をする",
              letter:
                "もうひとつ。{sender}からだよ 💌|巻き紙をタップして手紙を開く|次へ ✨|パーティーはここ|宛て",
              bloom: "この瞬間は、これからあなたの宝物。|最後にもうひとつ ✨",
              lightbox:
                "写真を閉じる|前の写真|次の写真|拡大：{alt}|{current} / {total}",
              share:
                "あなたへ 🤍|今書いた願いが、今年叶いますように|ポラロイドをダウンロード|準備中…|ダウンロードできなかったよ。スクリーンショットでも大丈夫 🤍|ダウンロードしたよ — 画像を長押しして写真に保存してね 🤍|パーティーをもう一度 🎈|この瞬間まで一緒にいてくれてありがとう — 素敵な誕生日を 🤍",
              keepsake:
                "サプライズパーティー|ひとつ大人になったね 🎂|あなたの番 — これから一年の願いを書いてね ✍️|例：今年は、自分の夢にもっと勇気を持って向き合いたい…|続ける前に、上に願い事を書いてね ✨|今年の私の願い ✨|プレゼントに添える 💌|{sender}にカードを送る 💌|ありがとう 🥹 今日は本当に愛されていると感じたよ。|この瞬間を残す ✨|準備中…|WhatsAppでメッセージ|今日から{age}歳|今年の私の願い ✨|{sender}からのお祝い 🤍|今日はあなたをお祝いする日。|パーティーをもう一度 🎈|誕生日パーティーのポラロイド",
              fallback:
                "お誕生日おめでとう。今年が去年よりも優しい一年になりますように。そして、あなたをお祝いしている人がいることを、いつも覚えていてね。|最後に小さな花束を。今日、誕生日を迎えたあなたへ。",
            },
            de: {
              common:
                "Sprache|dein Geschenk wird geöffnet…|Musik ausschalten|Musik einschalten|Du|Ich|Ein Erinnerungsfoto",
              unlock:
                "EIN GESCHENK FÜR DICH|bis sich dein Geschenk öffnet, bleiben noch|übrig.|Tage|Stunden|Minuten|Sekunden|es ist so weit 🎁|Geschenk öffnen|dein Geburtstag ist der Schlüssel zu diesem Geschenk.|gib dein Geburtsdatum ein|Dein Geburtsdatum|entsperren|noch nicht richtig. versuch es noch mal 🤍|gib zuerst dein Geburtsdatum ein",
              dark: "hier ist es so dunkel…|schalte doch mal das Licht ein",
              surprise:
                "ÜBERRASCHUNG!!|ALLES GUTE ZUM GEBURTSTAG|heute ist dein Tag 🎉|du wirst {age}|weiter geht's 🎈",
              voice:
                "jemand hat dir eine Sprachnachricht hinterlassen.|ziehe die Nadel auf die Platte zum Abspielen|zum Abspielen antippen|läuft… hör bis zum Ende zu|weiter ✨|erst mal überspringen|Tonarm — auf die Platte ziehen",
              cake: "jetzt kommt der wichtigste Teil 🎂|psst… die Kerzen werden angezündet 🔥|gedrückt halten, um die Kerzen auszupusten — ganz langsam|fast geschafft…|weiter so… nicht loslassen 🌬️|den Kuchen gedrückt halten|{out}/{total} Kerzen ausgepustet",
              wish: "jetzt… wünsch dir etwas. schließ die Augen, lass dir Zeit.|halte den Bildschirm gedrückt, während du dir etwas wünschst|dein Wunsch ist zu den Sternen geflogen… möge er eines Tages wahr werden 🌠|gedrückt halten und etwas wünschen",
              letter:
                "noch etwas. das ist von {sender} 💌|tippe auf die Rolle, um den Brief zu öffnen|weiter ✨|Hier ist die Party|an",
              bloom:
                "diese Momente gehören jetzt dir.|noch eine letzte Sache ✨",
              lightbox:
                "Foto schließen|Vorheriges Foto|Nächstes Foto|Vergrößern: {alt}|{current} / {total}",
              share:
                "FÜR DICH 🤍|möge dein gerade aufgeschriebener Wunsch dieses Jahr wahr werden|Polaroid herunterladen|wird vorbereitet…|Der Download hat nicht geklappt. Ein Screenshot geht auch 🤍|heruntergeladen — halte das Bild gedrückt, um es in deinen Fotos zu speichern 🤍|die Party noch mal erleben 🎈|danke, dass du bis zu diesem Moment dabei warst — einen wunderschönen Geburtstag 🤍",
              keepsake:
                "ÜBERRASCHUNGSPARTY|offiziell ein Jahr älter 🎂|du bist dran — schreib einen Wunsch für das nächste Jahr auf ✍️|z. B. dieses Jahr möchte ich mutiger meinen Träumen folgen…|schreib oben deinen Wunsch auf, bevor es weitergeht ✨|mein Wunsch für dieses Jahr ✨|Dem Geschenk beifügen 💌|Eine Karte an {sender} senden 💌|Danke 🥹 heute fühle ich mich wirklich geliebt.|diesen Moment bewahren ✨|wird vorbereitet…|Über WhatsApp schreiben|offiziell {age} Jahre alt|mein Wunsch für dieses Jahr ✨|gefeiert von {sender} 🤍|heute wirst du offiziell gefeiert.|die Party noch mal erleben 🎈|Geburtstagsparty-Polaroid",
              fallback:
                "Alles Gute zum Geburtstag. Möge dieses Jahr sanfter sein als das letzte — und mögest du immer wissen, dass jemand dich feiert.|Zum Abschluss ein kleiner Blumenstrauß für das Geburtstagskind.",
            },
            fr: {
              common:
                "Langue|ouverture de ton cadeau…|Couper la musique|Activer la musique|Toi|Moi|Une photo souvenir",
              unlock:
                "UN CADEAU POUR TOI|ton cadeau s'ouvre dans|à patienter.|jours|heures|minutes|secondes|c'est l'heure 🎁|ouvrir le cadeau|ta date de naissance est la clé de ce cadeau.|entre ta date de naissance pour l'ouvrir|Ta date de naissance|déverrouiller|pas tout à fait. réessaie 🤍|entre d'abord ta date de naissance",
              dark: "il fait si sombre ici…|essaie d'allumer la lumière",
              surprise:
                "SURPRISE !!|JOYEUX ANNIVERSAIRE|aujourd'hui, c'est ta journée 🎉|{age} ans aujourd'hui|on continue 🎈",
              voice:
                "quelqu'un t'a laissé un message vocal.|fais glisser l'aiguille sur le disque pour écouter|touche pour écouter|lecture en cours… écoute jusqu'au bout|la suite ✨|passer pour l'instant|bras de lecture — glisser sur le disque",
              cake: "voici le moment le plus important 🎂|chut… on allume les bougies 🔥|maintiens pour souffler les bougies — prends ton temps|presque…|encore un peu… ne lâche pas 🌬️|appuie longuement sur le gâteau|{out}/{total} bougies éteintes",
              wish: "maintenant… fais un vœu. ferme les yeux, prends ton temps.|garde le doigt sur l'écran pendant ton vœu|ton vœu s'est envolé vers les étoiles… qu'il se réalise un jour 🌠|maintenir pour faire un vœu",
              letter:
                "encore une chose. c'est de la part de {sender} 💌|touche le rouleau pour ouvrir la lettre|la suite ✨|La fête est ici|pour",
              bloom: "ces instants sont désormais à toi.|une dernière chose ✨",
              lightbox:
                "Fermer la photo|Photo précédente|Photo suivante|Agrandir : {alt}|{current} / {total}",
              share:
                "POUR TOI 🤍|que le vœu que tu viens d'écrire se réalise cette année|Télécharger le Polaroid|préparation en cours…|Le téléchargement a échoué. Une capture d'écran fera aussi l'affaire 🤍|téléchargé — appuie longuement sur l'image pour l'enregistrer dans tes photos 🤍|revivre la fête 🎈|merci d'avoir partagé ce moment jusqu'au bout — très bel anniversaire 🤍",
              keepsake:
                "FÊTE SURPRISE|officiellement un an de plus 🎂|à toi — écris un vœu pour l'année à venir ✍️|ex. cette année, j'espère oser davantage suivre mes rêves…|écris ton vœu ci-dessus avant de continuer ✨|mon vœu pour cette année ✨|Joindre au cadeau 💌|Envoyer une carte à {sender} 💌|Merci 🥹 aujourd'hui, je me sens vraiment aimé·e.|garder cet instant ✨|préparation en cours…|Discuter sur WhatsApp|officiellement {age} ans|mon vœu pour cette année ✨|à l'honneur grâce à {sender} 🤍|aujourd'hui, on te fête officiellement.|revivre la fête 🎈|Polaroid de la fête d'anniversaire",
              fallback:
                "Joyeux anniversaire. Que cette année soit plus douce que la précédente — et que tu saches toujours que quelqu'un te célèbre.|Un petit bouquet pour finir, pour la personne dont c'est l'anniversaire aujourd'hui.",
            },
            pl: {
              common:
                "Język|otwieranie prezentu…|Wyłącz muzykę|Włącz muzykę|Ty|Ja|Pamiątkowe zdjęcie",
              unlock:
                "PREZENT DLA CIEBIE|do otwarcia prezentu zostało|jeszcze chwila.|dni|godziny|minuty|sekundy|już czas 🎁|otwórz prezent|twoja data urodzenia jest kluczem do tego prezentu.|wpisz datę urodzenia, aby otworzyć|Twoja data urodzenia|odblokuj|jeszcze nie. spróbuj ponownie 🤍|najpierw wpisz datę urodzenia",
              dark: "ale tu ciemno…|spróbuj włączyć światło",
              surprise:
                "NIESPODZIANKA!!|WSZYSTKIEGO NAJLEPSZEGO|dziś jest twój dzień 🎉|dziś kończysz {age} lat|idziemy dalej 🎈",
              voice:
                "ktoś zostawił dla ciebie wiadomość głosową.|przeciągnij igłę na płytę, aby odtworzyć|dotknij, aby odtworzyć|odtwarzanie… posłuchaj do końca|dalej ✨|na razie pomiń|ramię gramofonu — przeciągnij na płytę",
              cake: "teraz najważniejsza część 🎂|cii… zapalamy świeczki 🔥|przytrzymaj, aby zdmuchnąć świeczki — spokojnie|już prawie…|jeszcze trochę… nie puszczaj 🌬️|naciśnij i przytrzymaj tort|zgaszone świeczki: {out}/{total}",
              wish: "teraz… pomyśl życzenie. zamknij oczy, nie spiesz się.|przytrzymaj ekran, myśląc o życzeniu|twoje życzenie poleciało do gwiazd… oby pewnego dnia się spełniło 🌠|przytrzymaj, aby pomyśleć życzenie",
              letter:
                "jeszcze jedno. to od {sender} 💌|dotknij zwoju, aby otworzyć list|dalej ✨|Tutaj jest przyjęcie|dla",
              bloom: "te chwile są teraz twoje.|ostatnia rzecz ✨",
              lightbox:
                "Zamknij zdjęcie|Poprzednie zdjęcie|Następne zdjęcie|Powiększ: {alt}|{current} / {total}",
              share:
                "DLA CIEBIE 🤍|niech twoje zapisane życzenie spełni się w tym roku|Pobierz polaroid|przygotowywanie…|Nie udało się pobrać. Zrzut ekranu też się sprawdzi 🤍|pobrano — przytrzymaj zdjęcie, aby zapisać je w galerii 🤍|przeżyj przyjęcie jeszcze raz 🎈|dziękuję za wspólny czas aż do tej chwili — pięknych urodzin 🤍",
              keepsake:
                "PRZYJĘCIE NIESPODZIANKA|oficjalnie kolejny rok za tobą 🎂|twoja kolej — zapisz życzenie na nadchodzący rok ✍️|np. w tym roku chcę odważniej podążać za marzeniami…|zapisz życzenie powyżej, zanim przejdziesz dalej ✨|moje życzenie na ten rok ✨|Dołącz do prezentu 💌|Wyślij kartkę do {sender} 💌|Dziękuję 🥹 dziś naprawdę czuję, że ktoś mnie kocha.|zachowaj tę chwilę ✨|przygotowywanie…|Napisz na WhatsAppie|ukończone lata: {age}|moje życzenie na ten rok ✨|życzenia od {sender} 🤍|dziś oficjalnie świętujemy twój dzień.|przeżyj przyjęcie jeszcze raz 🎈|Polaroid z przyjęcia urodzinowego",
              fallback:
                "Wszystkiego najlepszego. Niech ten rok będzie łagodniejszy od poprzedniego — i pamiętaj, że ktoś zawsze cieszy się twoim świętem.|Na zakończenie mały bukiet dla osoby, która dziś obchodzi urodziny.",
            },
          }).map(([e, t]) => [
            e,
            (function (e) {
              let t = {};
              for (let a of Object.keys(f)) {
                let r = f[a].split("|"),
                  n = e[a].split("|");
                if (r.length !== n.length)
                  throw Error(`Invalid translation group: ${a}`);
                let s = Object.fromEntries(r.map((e, t) => [e, n[t]]));
                "fallback" === a ? Object.assign(t, s) : (t[a] = s);
              }
              let a = String(t.cake.extinguished),
                r = String(t.keepsake.ageLine),
                s = String(t.lightbox.open),
                o = String(t.lightbox.counter);
              return (
                (t.cake.extinguished = (e, t) =>
                  n(a, { out: String(e), total: String(t) })),
                (t.keepsake.ageLine = (e) => n(r, { age: e })),
                (t.lightbox.open = (e) => n(s, { alt: e })),
                (t.lightbox.counter = (e, t) =>
                  n(o, { current: String(e), total: String(t) })),
                t
              );
            })(t),
          ]),
        ),
      },
      x = {
        vi: "🇻🇳",
        "en-GB": "🇬🇧",
        "en-US": "🇺🇸",
        "zh-CN": "🇨🇳",
        ko: "🇰🇷",
        ja: "🇯🇵",
        de: "🇩🇪",
        fr: "🇫🇷",
        pl: "🇵🇱",
      },
      y = (0, a.createContext)("vi"),
      v = () => (0, a.useContext)(y);
    function w({ children: e }) {
      let r = (0, a.useId)(),
        n = (0, a.useRef)(null),
        s = (0, a.useRef)(null),
        [o, l] = (0, a.useState)("vi");
      (0, a.useEffect)(() => {
        document.documentElement.lang = o;
      }, [o]);
      let c = b[o];
      return (0, t.jsx)(y.Provider, {
        value: o,
        children: (0, t.jsxs)(i, {
          value: c,
          children: [
            e,
            (0, t.jsx)("button", {
              ref: s,
              type: "button",
              className: p.default.trigger,
              popoverTarget: r,
              "aria-label": `${c.common.language}: ${h.find(([e]) => e === o)?.[1]}`,
              title: c.common.language,
              children: (0, t.jsx)("span", {
                "aria-hidden": "true",
                children: x[o],
              }),
            }),
            (0, t.jsx)("div", {
              ref: n,
              id: r,
              popover: "auto",
              className: p.default.options,
              role: "group",
              "aria-label": c.common.language,
              children: h.map(([e, a]) =>
                (0, t.jsxs)(
                  "button",
                  {
                    type: "button",
                    lang: e,
                    "aria-pressed": o === e,
                    onClick: () => {
                      (l(e), n.current?.hidePopover(), s.current?.focus());
                    },
                    children: [
                      (0, t.jsx)("span", {
                        "aria-hidden": "true",
                        children: x[e],
                      }),
                      (0, t.jsx)("span", { children: a }),
                    ],
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
      });
    }
    function k(e, t) {
      if (!e || !/^\d{4}-\d{2}-\d{2}$/.test(e)) return "";
      let a = new Date(`${e}T00:00:00Z`);
      return Number.isNaN(a.getTime())
        ? ""
        : new Intl.DateTimeFormat(t, {
            day: "numeric",
            month: "long",
            year: "numeric",
            timeZone: "UTC",
          }).format(a);
    }
    let j = (...e) =>
        e
          .filter((e, t, a) => !!e && "" !== e.trim() && a.indexOf(e) === t)
          .join(" ")
          .trim(),
      z = (e) => {
        let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, a) =>
          a ? a.toUpperCase() : t.toLowerCase(),
        );
        return t.charAt(0).toUpperCase() + t.slice(1);
      };
    var N = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    let C = (0, a.createContext)({}),
      S = (0, a.forwardRef)(
        (
          {
            color: e,
            size: t,
            strokeWidth: r,
            absoluteStrokeWidth: n,
            className: s = "",
            children: o,
            iconNode: i,
            ...l
          },
          c,
        ) => {
          let {
              size: d = 24,
              strokeWidth: u = 2,
              absoluteStrokeWidth: m = !1,
              color: p = "currentColor",
              className: h = "",
            } = (0, a.useContext)(C) ?? {},
            f = (n ?? m) ? (24 * Number(r ?? u)) / Number(t ?? d) : (r ?? u);
          return (0, a.createElement)(
            "svg",
            {
              ref: c,
              ...N,
              width: t ?? d ?? N.width,
              height: t ?? d ?? N.height,
              stroke: e ?? p,
              strokeWidth: f,
              className: j("lucide", h, s),
              ...(!o &&
                !((e) => {
                  for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t)
                      return !0;
                  return !1;
                })(l) && { "aria-hidden": "true" }),
              ...l,
            },
            [
              ...i.map(([e, t]) => (0, a.createElement)(e, t)),
              ...(Array.isArray(o) ? o : [o]),
            ],
          );
        },
      ),
      $ = (e, t) => {
        let r = (0, a.forwardRef)(({ className: r, ...n }, s) =>
          (0, a.createElement)(S, {
            ref: s,
            iconNode: t,
            className: j(
              `lucide-${z(e)
                .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                .toLowerCase()}`,
              `lucide-${e}`,
              r,
            ),
            ...n,
          }),
        );
        return ((r.displayName = z(e)), r);
      },
      M = $("volume-2", [
        [
          "path",
          {
            d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
            key: "uqj9uw",
          },
        ],
        ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
        ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }],
      ]),
      T = $("volume-x", [
        [
          "path",
          {
            d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
            key: "uqj9uw",
          },
        ],
        ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
        ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }],
      ]);
    function P({ src: e }) {
      let r = l(),
        n = e && e.trim() ? e : "/birthday/music/birthday.mp3",
        s = (0, a.useRef)(null),
        [o, i] = (0, a.useState)(!1),
        [c, d] = (0, a.useState)(!1),
        u = (0, a.useRef)(!1);
      return (
        (0, a.useEffect)(() => {
          let e = new Audio(n);
          ((e.loop = !0),
            (e.volume = 0.5),
            (e.preload = "auto"),
            (s.current = e));
          let t = () => {
              e.play()
                .then(() => {
                  (i(!0), d(!0), r());
                })
                .catch(() => {});
            },
            a = ["pointerdown", "touchstart", "keydown", "click"],
            r = () => {
              a.forEach((e) => window.removeEventListener(e, t));
            };
          return (
            a.forEach((e) => window.addEventListener(e, t, { passive: !0 })),
            () => {
              (r(), e.pause(), (e.src = ""), (s.current = null));
            }
          );
        }, [n]),
        (0, a.useEffect)(() => {
          let e = () => {
              let e = s.current;
              e && !e.paused && ((u.current = !0), e.pause(), i(!1));
            },
            t = () => {
              let e = s.current;
              e &&
                u.current &&
                ((u.current = !1),
                e
                  .play()
                  .then(() => i(!0))
                  .catch(() => {}));
            };
          return (
            window.addEventListener("sp-voice-play", e),
            window.addEventListener("sp-voice-stop", t),
            () => {
              (window.removeEventListener("sp-voice-play", e),
                window.removeEventListener("sp-voice-stop", t));
            }
          );
        }, []),
        (0, t.jsxs)("button", {
          type: "button",
          onClick: () => {
            u.current = !1;
            let e = s.current;
            e &&
              (e.paused
                ? e.play().then(() => {
                    (i(!0), d(!0));
                  })
                : (e.pause(), i(!1)));
          },
          "aria-label": o ? r.common.musicOff : r.common.musicOn,
          title: o ? r.common.musicOff : r.common.musicOn,
          className:
            "fixed bottom-4 right-4 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white/90 backdrop-blur-md transition hover:bg-black/50 hover:text-white",
          style: { WebkitTapHighlightColor: "transparent" },
          children: [
            o
              ? (0, t.jsx)(M, { className: "h-5 w-5" })
              : (0, t.jsx)(T, { className: "h-5 w-5" }),
            !c &&
              (0, t.jsx)("span", {
                className:
                  "pointer-events-none absolute inset-0 animate-ping rounded-full border border-white/40",
              }),
          ],
        })
      );
    }
    let E = (e = new Map(), t = null, a) => ({
        nextPart: e,
        validators: t,
        classGroupId: a,
      }),
      R = [],
      A = (e, t, a) => {
        if (0 == e.length - t) return a.classGroupId;
        let r = e[t],
          n = a.nextPart.get(r);
        if (n) {
          let a = A(e, t + 1, n);
          if (a) return a;
        }
        let s = a.validators;
        if (null === s) return;
        let o = 0 === t ? e.join("-") : e.slice(t).join("-"),
          i = s.length;
        for (let e = 0; e < i; e++) {
          let t = s[e];
          if (t.validator(o)) return t.classGroupId;
        }
      },
      D = (e, t) => {
        let a = E();
        for (let r in e) F(e[r], a, r, t);
        return a;
      },
      F = (e, t, a, r) => {
        let n = e.length;
        for (let s = 0; s < n; s++) L(e[s], t, a, r);
      },
      L = (e, t, a, r) => {
        "string" == typeof e
          ? W(e, t, a)
          : "function" == typeof e
            ? B(e, t, a, r)
            : I(e, t, a, r);
      },
      W = (e, t, a) => {
        ("" === e ? t : H(t, e)).classGroupId = a;
      },
      B = (e, t, a, r) => {
        G(e)
          ? F(e(r), t, a, r)
          : (null === t.validators && (t.validators = []),
            t.validators.push({ classGroupId: a, validator: e }));
      },
      I = (e, t, a, r) => {
        let n = Object.entries(e),
          s = n.length;
        for (let e = 0; e < s; e++) {
          let [s, o] = n[e];
          F(o, H(t, s), a, r);
        }
      },
      H = (e, t) => {
        let a = e,
          r = t.split("-"),
          n = r.length;
        for (let e = 0; e < n; e++) {
          let t = r[e],
            n = a.nextPart.get(t);
          (n || ((n = E()), a.nextPart.set(t, n)), (a = n));
        }
        return a;
      },
      G = (e) => "isThemeGetter" in e && !0 === e.isThemeGetter,
      O = [],
      U = (e, t, a, r, n) => ({
        modifiers: e,
        hasImportantModifier: t,
        baseClassName: a,
        maybePostfixModifierPosition: r,
        isExternal: n,
      }),
      q = /\s+/,
      _ = (e) => {
        let t;
        if ("string" == typeof e) return e;
        let a = "";
        for (let r = 0; r < e.length; r++)
          e[r] && (t = _(e[r])) && (a && (a += " "), (a += t));
        return a;
      },
      Y = [],
      Z = (e) => {
        let t = (t) => t[e] || Y;
        return ((t.isThemeGetter = !0), t);
      },
      K = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
      J = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
      X = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
      V = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
      Q =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
      ee = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
      et = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
      ea =
        /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
      er = (e) => X.test(e),
      en = (e) => !!e && !Number.isNaN(Number(e)),
      es = (e) => !!e && Number.isInteger(Number(e)),
      eo = (e) => e.endsWith("%") && en(e.slice(0, -1)),
      ei = (e) => V.test(e),
      el = () => !0,
      ec = (e) => Q.test(e) && !ee.test(e),
      ed = () => !1,
      eu = (e) => et.test(e),
      em = (e) => ea.test(e),
      ep = (e) => !ef(e) && !ej(e),
      eh = (e) => eP(e, eD, ed),
      ef = (e) => K.test(e),
      eg = (e) => eP(e, eF, ec),
      eb = (e) => eP(e, eL, en),
      ex = (e) => eP(e, eB, el),
      ey = (e) => eP(e, eW, ed),
      ev = (e) => eP(e, eR, ed),
      ew = (e) => eP(e, eA, em),
      ek = (e) => eP(e, eI, eu),
      ej = (e) => J.test(e),
      ez = (e) => eE(e, eF),
      eN = (e) => eE(e, eW),
      eC = (e) => eE(e, eR),
      eS = (e) => eE(e, eD),
      e$ = (e) => eE(e, eA),
      eM = (e) => eE(e, eI, !0),
      eT = (e) => eE(e, eB, !0),
      eP = (e, t, a) => {
        let r = K.exec(e);
        return !!r && (r[1] ? t(r[1]) : a(r[2]));
      },
      eE = (e, t, a = !1) => {
        let r = J.exec(e);
        return !!r && (r[1] ? t(r[1]) : a);
      },
      eR = (e) => "position" === e || "percentage" === e,
      eA = (e) => "image" === e || "url" === e,
      eD = (e) => "length" === e || "size" === e || "bg-size" === e,
      eF = (e) => "length" === e,
      eL = (e) => "number" === e,
      eW = (e) => "family-name" === e,
      eB = (e) => "number" === e || "weight" === e,
      eI = (e) => "shadow" === e,
      eH = ((e, ...t) => {
        let a,
          r,
          n,
          s,
          o = (e) => {
            let t = r(e);
            if (t) return t;
            let s = ((e, t) => {
              let {
                  parseClassName: a,
                  getClassGroupId: r,
                  getConflictingClassGroupIds: n,
                  sortModifiers: s,
                } = t,
                o = [],
                i = e.trim().split(q),
                l = "";
              for (let e = i.length - 1; e >= 0; e -= 1) {
                let t = i[e],
                  {
                    isExternal: c,
                    modifiers: d,
                    hasImportantModifier: u,
                    baseClassName: m,
                    maybePostfixModifierPosition: p,
                  } = a(t);
                if (c) {
                  l = t + (l.length > 0 ? " " + l : l);
                  continue;
                }
                let h = !!p,
                  f = r(h ? m.substring(0, p) : m);
                if (!f) {
                  if (!h || !(f = r(m))) {
                    l = t + (l.length > 0 ? " " + l : l);
                    continue;
                  }
                  h = !1;
                }
                let g =
                    0 === d.length
                      ? ""
                      : 1 === d.length
                        ? d[0]
                        : s(d).join(":"),
                  b = u ? g + "!" : g,
                  x = b + f;
                if (o.indexOf(x) > -1) continue;
                o.push(x);
                let y = n(f, h);
                for (let e = 0; e < y.length; ++e) {
                  let t = y[e];
                  o.push(b + t);
                }
                l = t + (l.length > 0 ? " " + l : l);
              }
              return l;
            })(e, a);
            return (n(e, s), s);
          };
        return (
          (s = (i) => {
            var l;
            let c;
            return (
              (r = (a = {
                cache: ((e) => {
                  if (e < 1) return { get: () => void 0, set: () => {} };
                  let t = 0,
                    a = Object.create(null),
                    r = Object.create(null),
                    n = (n, s) => {
                      ((a[n] = s),
                        ++t > e &&
                          ((t = 0), (r = a), (a = Object.create(null))));
                    };
                  return {
                    get(e) {
                      let t = a[e];
                      return void 0 !== t
                        ? t
                        : void 0 !== (t = r[e])
                          ? (n(e, t), t)
                          : void 0;
                    },
                    set(e, t) {
                      e in a ? (a[e] = t) : n(e, t);
                    },
                  };
                })((l = t.reduce((e, t) => t(e), e())).cacheSize),
                parseClassName: ((e) => {
                  let { prefix: t, experimentalParseClassName: a } = e,
                    r = (e) => {
                      let t,
                        a = [],
                        r = 0,
                        n = 0,
                        s = 0,
                        o = e.length;
                      for (let i = 0; i < o; i++) {
                        let o = e[i];
                        if (0 === r && 0 === n) {
                          if (":" === o) {
                            (a.push(e.slice(s, i)), (s = i + 1));
                            continue;
                          }
                          if ("/" === o) {
                            t = i;
                            continue;
                          }
                        }
                        "[" === o
                          ? r++
                          : "]" === o
                            ? r--
                            : "(" === o
                              ? n++
                              : ")" === o && n--;
                      }
                      let i = 0 === a.length ? e : e.slice(s),
                        l = i,
                        c = !1;
                      return (
                        i.endsWith("!")
                          ? ((l = i.slice(0, -1)), (c = !0))
                          : i.startsWith("!") && ((l = i.slice(1)), (c = !0)),
                        U(a, c, l, t && t > s ? t - s : void 0)
                      );
                    };
                  if (t) {
                    let e = t + ":",
                      a = r;
                    r = (t) =>
                      t.startsWith(e)
                        ? a(t.slice(e.length))
                        : U(O, !1, t, void 0, !0);
                  }
                  if (a) {
                    let e = r;
                    r = (t) => a({ className: t, parseClassName: e });
                  }
                  return r;
                })(l),
                sortModifiers:
                  ((c = new Map()),
                  l.orderSensitiveModifiers.forEach((e, t) => {
                    c.set(e, 1e6 + t);
                  }),
                  (e) => {
                    let t = [],
                      a = [];
                    for (let r = 0; r < e.length; r++) {
                      let n = e[r],
                        s = "[" === n[0],
                        o = c.has(n);
                      s || o
                        ? (a.length > 0 && (a.sort(), t.push(...a), (a = [])),
                          t.push(n))
                        : a.push(n);
                    }
                    return (a.length > 0 && (a.sort(), t.push(...a)), t);
                  }),
                ...((e) => {
                  let t = ((e) => {
                      let { theme: t, classGroups: a } = e;
                      return D(a, t);
                    })(e),
                    {
                      conflictingClassGroups: a,
                      conflictingClassGroupModifiers: r,
                    } = e;
                  return {
                    getClassGroupId: (e) => {
                      if (e.startsWith("[") && e.endsWith("]")) {
                        var a;
                        let t, r, n;
                        return -1 === (a = e).slice(1, -1).indexOf(":")
                          ? void 0
                          : ((r = (t = a.slice(1, -1)).indexOf(":")),
                            (n = t.slice(0, r)) ? "arbitrary.." + n : void 0);
                      }
                      let r = e.split("-"),
                        n = +("" === r[0] && r.length > 1);
                      return A(r, n, t);
                    },
                    getConflictingClassGroupIds: (e, t) => {
                      if (t) {
                        let t = r[e],
                          n = a[e];
                        if (t) {
                          if (n) {
                            let e = Array(n.length + t.length);
                            for (let t = 0; t < n.length; t++) e[t] = n[t];
                            for (let a = 0; a < t.length; a++)
                              e[n.length + a] = t[a];
                            return e;
                          }
                          return t;
                        }
                        return n || R;
                      }
                      return a[e] || R;
                    },
                  };
                })(l),
              }).cache.get),
              (n = a.cache.set),
              (s = o),
              o(i)
            );
          }),
          (...e) =>
            s(
              ((...e) => {
                let t,
                  a,
                  r = 0,
                  n = "";
                for (; r < e.length; )
                  (t = e[r++]) && (a = _(t)) && (n && (n += " "), (n += a));
                return n;
              })(...e),
            )
        );
      })(() => {
        let e = Z("color"),
          t = Z("font"),
          a = Z("text"),
          r = Z("font-weight"),
          n = Z("tracking"),
          s = Z("leading"),
          o = Z("breakpoint"),
          i = Z("container"),
          l = Z("spacing"),
          c = Z("radius"),
          d = Z("shadow"),
          u = Z("inset-shadow"),
          m = Z("text-shadow"),
          p = Z("drop-shadow"),
          h = Z("blur"),
          f = Z("perspective"),
          g = Z("aspect"),
          b = Z("ease"),
          x = Z("animate"),
          y = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          v = () => [
            "center",
            "top",
            "bottom",
            "left",
            "right",
            "top-left",
            "left-top",
            "top-right",
            "right-top",
            "bottom-right",
            "right-bottom",
            "bottom-left",
            "left-bottom",
          ],
          w = () => [...v(), ej, ef],
          k = () => ["auto", "hidden", "clip", "visible", "scroll"],
          j = () => ["auto", "contain", "none"],
          z = () => [ej, ef, l],
          N = () => [er, "full", "auto", ...z()],
          C = () => [es, "none", "subgrid", ej, ef],
          S = () => ["auto", { span: ["full", es, ej, ef] }, es, ej, ef],
          $ = () => [es, "auto", ej, ef],
          M = () => ["auto", "min", "max", "fr", ej, ef],
          T = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
            "baseline",
            "center-safe",
            "end-safe",
          ],
          P = () => [
            "start",
            "end",
            "center",
            "stretch",
            "center-safe",
            "end-safe",
          ],
          E = () => ["auto", ...z()],
          R = () => [
            er,
            "auto",
            "full",
            "dvw",
            "dvh",
            "lvw",
            "lvh",
            "svw",
            "svh",
            "min",
            "max",
            "fit",
            ...z(),
          ],
          A = () => [
            er,
            "screen",
            "full",
            "dvw",
            "lvw",
            "svw",
            "min",
            "max",
            "fit",
            ...z(),
          ],
          D = () => [
            er,
            "screen",
            "full",
            "lh",
            "dvh",
            "lvh",
            "svh",
            "min",
            "max",
            "fit",
            ...z(),
          ],
          F = () => [e, ej, ef],
          L = () => [...v(), eC, ev, { position: [ej, ef] }],
          W = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
          B = () => ["auto", "cover", "contain", eS, eh, { size: [ej, ef] }],
          I = () => [eo, ez, eg],
          H = () => ["", "none", "full", c, ej, ef],
          G = () => ["", en, ez, eg],
          O = () => ["solid", "dashed", "dotted", "double"],
          U = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          q = () => [en, eo, eC, ev],
          _ = () => ["", "none", h, ej, ef],
          Y = () => ["none", en, ej, ef],
          K = () => ["none", en, ej, ef],
          J = () => [en, ej, ef],
          X = () => [er, "full", ...z()];
        return {
          cacheSize: 500,
          theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [ei],
            breakpoint: [ei],
            color: [el],
            container: [ei],
            "drop-shadow": [ei],
            ease: ["in", "out", "in-out"],
            font: [ep],
            "font-weight": [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
            ],
            "inset-shadow": [ei],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: [
              "dramatic",
              "near",
              "normal",
              "midrange",
              "distant",
              "none",
            ],
            radius: [ei],
            shadow: [ei],
            spacing: ["px", en],
            text: [ei],
            "text-shadow": [ei],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", er, ef, ej, g] }],
            container: ["container"],
            columns: [{ columns: [en, ef, ej, i] }],
            "break-after": [{ "break-after": y() }],
            "break-before": [{ "break-before": y() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            sr: ["sr-only", "not-sr-only"],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: w() }],
            overflow: [{ overflow: k() }],
            "overflow-x": [{ "overflow-x": k() }],
            "overflow-y": [{ "overflow-y": k() }],
            overscroll: [{ overscroll: j() }],
            "overscroll-x": [{ "overscroll-x": j() }],
            "overscroll-y": [{ "overscroll-y": j() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: N() }],
            "inset-x": [{ "inset-x": N() }],
            "inset-y": [{ "inset-y": N() }],
            start: [{ "inset-s": N(), start: N() }],
            end: [{ "inset-e": N(), end: N() }],
            "inset-bs": [{ "inset-bs": N() }],
            "inset-be": [{ "inset-be": N() }],
            top: [{ top: N() }],
            right: [{ right: N() }],
            bottom: [{ bottom: N() }],
            left: [{ left: N() }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: [es, "auto", ej, ef] }],
            basis: [{ basis: [er, "full", "auto", i, ...z()] }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
            flex: [{ flex: [en, er, "auto", "initial", "none", ef] }],
            grow: [{ grow: ["", en, ej, ef] }],
            shrink: [{ shrink: ["", en, ej, ef] }],
            order: [{ order: [es, "first", "last", "none", ej, ef] }],
            "grid-cols": [{ "grid-cols": C() }],
            "col-start-end": [{ col: S() }],
            "col-start": [{ "col-start": $() }],
            "col-end": [{ "col-end": $() }],
            "grid-rows": [{ "grid-rows": C() }],
            "row-start-end": [{ row: S() }],
            "row-start": [{ "row-start": $() }],
            "row-end": [{ "row-end": $() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": M() }],
            "auto-rows": [{ "auto-rows": M() }],
            gap: [{ gap: z() }],
            "gap-x": [{ "gap-x": z() }],
            "gap-y": [{ "gap-y": z() }],
            "justify-content": [{ justify: [...T(), "normal"] }],
            "justify-items": [{ "justify-items": [...P(), "normal"] }],
            "justify-self": [{ "justify-self": ["auto", ...P()] }],
            "align-content": [{ content: ["normal", ...T()] }],
            "align-items": [{ items: [...P(), { baseline: ["", "last"] }] }],
            "align-self": [
              { self: ["auto", ...P(), { baseline: ["", "last"] }] },
            ],
            "place-content": [{ "place-content": T() }],
            "place-items": [{ "place-items": [...P(), "baseline"] }],
            "place-self": [{ "place-self": ["auto", ...P()] }],
            p: [{ p: z() }],
            px: [{ px: z() }],
            py: [{ py: z() }],
            ps: [{ ps: z() }],
            pe: [{ pe: z() }],
            pbs: [{ pbs: z() }],
            pbe: [{ pbe: z() }],
            pt: [{ pt: z() }],
            pr: [{ pr: z() }],
            pb: [{ pb: z() }],
            pl: [{ pl: z() }],
            m: [{ m: E() }],
            mx: [{ mx: E() }],
            my: [{ my: E() }],
            ms: [{ ms: E() }],
            me: [{ me: E() }],
            mbs: [{ mbs: E() }],
            mbe: [{ mbe: E() }],
            mt: [{ mt: E() }],
            mr: [{ mr: E() }],
            mb: [{ mb: E() }],
            ml: [{ ml: E() }],
            "space-x": [{ "space-x": z() }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": z() }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{ size: R() }],
            "inline-size": [{ inline: ["auto", ...A()] }],
            "min-inline-size": [{ "min-inline": ["auto", ...A()] }],
            "max-inline-size": [{ "max-inline": ["none", ...A()] }],
            "block-size": [{ block: ["auto", ...D()] }],
            "min-block-size": [{ "min-block": ["auto", ...D()] }],
            "max-block-size": [{ "max-block": ["none", ...D()] }],
            w: [{ w: [i, "screen", ...R()] }],
            "min-w": [{ "min-w": [i, "screen", "none", ...R()] }],
            "max-w": [
              {
                "max-w": [
                  i,
                  "screen",
                  "none",
                  "prose",
                  { screen: [o] },
                  ...R(),
                ],
              },
            ],
            h: [{ h: ["screen", "lh", ...R()] }],
            "min-h": [{ "min-h": ["screen", "lh", "none", ...R()] }],
            "max-h": [{ "max-h": ["screen", "lh", ...R()] }],
            "font-size": [{ text: ["base", a, ez, eg] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{ font: [r, eT, ex] }],
            "font-stretch": [
              {
                "font-stretch": [
                  "ultra-condensed",
                  "extra-condensed",
                  "condensed",
                  "semi-condensed",
                  "normal",
                  "semi-expanded",
                  "expanded",
                  "extra-expanded",
                  "ultra-expanded",
                  eo,
                  ef,
                ],
              },
            ],
            "font-family": [{ font: [eN, ey, t] }],
            "font-features": [{ "font-features": [ef] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{ tracking: [n, ej, ef] }],
            "line-clamp": [{ "line-clamp": [en, "none", ej, eb] }],
            leading: [{ leading: [s, ...z()] }],
            "list-image": [{ "list-image": ["none", ej, ef] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "list-style-type": [{ list: ["disc", "decimal", "none", ej, ef] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "placeholder-color": [{ placeholder: F() }],
            "text-color": [{ text: F() }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...O(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: [en, "from-font", "auto", ej, eg] },
            ],
            "text-decoration-color": [{ decoration: F() }],
            "underline-offset": [{ "underline-offset": [en, "auto", ej, ef] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: z() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  ej,
                  ef,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", ej, ef] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: L() }],
            "bg-repeat": [{ bg: W() }],
            "bg-size": [{ bg: B() }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    linear: [
                      { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                      es,
                      ej,
                      ef,
                    ],
                    radial: ["", ej, ef],
                    conic: [es, ej, ef],
                  },
                  e$,
                  ew,
                ],
              },
            ],
            "bg-color": [{ bg: F() }],
            "gradient-from-pos": [{ from: I() }],
            "gradient-via-pos": [{ via: I() }],
            "gradient-to-pos": [{ to: I() }],
            "gradient-from": [{ from: F() }],
            "gradient-via": [{ via: F() }],
            "gradient-to": [{ to: F() }],
            rounded: [{ rounded: H() }],
            "rounded-s": [{ "rounded-s": H() }],
            "rounded-e": [{ "rounded-e": H() }],
            "rounded-t": [{ "rounded-t": H() }],
            "rounded-r": [{ "rounded-r": H() }],
            "rounded-b": [{ "rounded-b": H() }],
            "rounded-l": [{ "rounded-l": H() }],
            "rounded-ss": [{ "rounded-ss": H() }],
            "rounded-se": [{ "rounded-se": H() }],
            "rounded-ee": [{ "rounded-ee": H() }],
            "rounded-es": [{ "rounded-es": H() }],
            "rounded-tl": [{ "rounded-tl": H() }],
            "rounded-tr": [{ "rounded-tr": H() }],
            "rounded-br": [{ "rounded-br": H() }],
            "rounded-bl": [{ "rounded-bl": H() }],
            "border-w": [{ border: G() }],
            "border-w-x": [{ "border-x": G() }],
            "border-w-y": [{ "border-y": G() }],
            "border-w-s": [{ "border-s": G() }],
            "border-w-e": [{ "border-e": G() }],
            "border-w-bs": [{ "border-bs": G() }],
            "border-w-be": [{ "border-be": G() }],
            "border-w-t": [{ "border-t": G() }],
            "border-w-r": [{ "border-r": G() }],
            "border-w-b": [{ "border-b": G() }],
            "border-w-l": [{ "border-l": G() }],
            "divide-x": [{ "divide-x": G() }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": G() }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{ border: [...O(), "hidden", "none"] }],
            "divide-style": [{ divide: [...O(), "hidden", "none"] }],
            "border-color": [{ border: F() }],
            "border-color-x": [{ "border-x": F() }],
            "border-color-y": [{ "border-y": F() }],
            "border-color-s": [{ "border-s": F() }],
            "border-color-e": [{ "border-e": F() }],
            "border-color-bs": [{ "border-bs": F() }],
            "border-color-be": [{ "border-be": F() }],
            "border-color-t": [{ "border-t": F() }],
            "border-color-r": [{ "border-r": F() }],
            "border-color-b": [{ "border-b": F() }],
            "border-color-l": [{ "border-l": F() }],
            "divide-color": [{ divide: F() }],
            "outline-style": [{ outline: [...O(), "none", "hidden"] }],
            "outline-offset": [{ "outline-offset": [en, ej, ef] }],
            "outline-w": [{ outline: ["", en, ez, eg] }],
            "outline-color": [{ outline: F() }],
            shadow: [{ shadow: ["", "none", d, eM, ek] }],
            "shadow-color": [{ shadow: F() }],
            "inset-shadow": [{ "inset-shadow": ["none", u, eM, ek] }],
            "inset-shadow-color": [{ "inset-shadow": F() }],
            "ring-w": [{ ring: G() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: F() }],
            "ring-offset-w": [{ "ring-offset": [en, eg] }],
            "ring-offset-color": [{ "ring-offset": F() }],
            "inset-ring-w": [{ "inset-ring": G() }],
            "inset-ring-color": [{ "inset-ring": F() }],
            "text-shadow": [{ "text-shadow": ["none", m, eM, ek] }],
            "text-shadow-color": [{ "text-shadow": F() }],
            opacity: [{ opacity: [en, ej, ef] }],
            "mix-blend": [
              { "mix-blend": [...U(), "plus-darker", "plus-lighter"] },
            ],
            "bg-blend": [{ "bg-blend": U() }],
            "mask-clip": [
              {
                "mask-clip": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
              "mask-no-clip",
            ],
            "mask-composite": [
              { mask: ["add", "subtract", "intersect", "exclude"] },
            ],
            "mask-image-linear-pos": [{ "mask-linear": [en] }],
            "mask-image-linear-from-pos": [{ "mask-linear-from": q() }],
            "mask-image-linear-to-pos": [{ "mask-linear-to": q() }],
            "mask-image-linear-from-color": [{ "mask-linear-from": F() }],
            "mask-image-linear-to-color": [{ "mask-linear-to": F() }],
            "mask-image-t-from-pos": [{ "mask-t-from": q() }],
            "mask-image-t-to-pos": [{ "mask-t-to": q() }],
            "mask-image-t-from-color": [{ "mask-t-from": F() }],
            "mask-image-t-to-color": [{ "mask-t-to": F() }],
            "mask-image-r-from-pos": [{ "mask-r-from": q() }],
            "mask-image-r-to-pos": [{ "mask-r-to": q() }],
            "mask-image-r-from-color": [{ "mask-r-from": F() }],
            "mask-image-r-to-color": [{ "mask-r-to": F() }],
            "mask-image-b-from-pos": [{ "mask-b-from": q() }],
            "mask-image-b-to-pos": [{ "mask-b-to": q() }],
            "mask-image-b-from-color": [{ "mask-b-from": F() }],
            "mask-image-b-to-color": [{ "mask-b-to": F() }],
            "mask-image-l-from-pos": [{ "mask-l-from": q() }],
            "mask-image-l-to-pos": [{ "mask-l-to": q() }],
            "mask-image-l-from-color": [{ "mask-l-from": F() }],
            "mask-image-l-to-color": [{ "mask-l-to": F() }],
            "mask-image-x-from-pos": [{ "mask-x-from": q() }],
            "mask-image-x-to-pos": [{ "mask-x-to": q() }],
            "mask-image-x-from-color": [{ "mask-x-from": F() }],
            "mask-image-x-to-color": [{ "mask-x-to": F() }],
            "mask-image-y-from-pos": [{ "mask-y-from": q() }],
            "mask-image-y-to-pos": [{ "mask-y-to": q() }],
            "mask-image-y-from-color": [{ "mask-y-from": F() }],
            "mask-image-y-to-color": [{ "mask-y-to": F() }],
            "mask-image-radial": [{ "mask-radial": [ej, ef] }],
            "mask-image-radial-from-pos": [{ "mask-radial-from": q() }],
            "mask-image-radial-to-pos": [{ "mask-radial-to": q() }],
            "mask-image-radial-from-color": [{ "mask-radial-from": F() }],
            "mask-image-radial-to-color": [{ "mask-radial-to": F() }],
            "mask-image-radial-shape": [
              { "mask-radial": ["circle", "ellipse"] },
            ],
            "mask-image-radial-size": [
              {
                "mask-radial": [
                  { closest: ["side", "corner"], farthest: ["side", "corner"] },
                ],
              },
            ],
            "mask-image-radial-pos": [{ "mask-radial-at": v() }],
            "mask-image-conic-pos": [{ "mask-conic": [en] }],
            "mask-image-conic-from-pos": [{ "mask-conic-from": q() }],
            "mask-image-conic-to-pos": [{ "mask-conic-to": q() }],
            "mask-image-conic-from-color": [{ "mask-conic-from": F() }],
            "mask-image-conic-to-color": [{ "mask-conic-to": F() }],
            "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
            "mask-origin": [
              {
                "mask-origin": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
            ],
            "mask-position": [{ mask: L() }],
            "mask-repeat": [{ mask: W() }],
            "mask-size": [{ mask: B() }],
            "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
            "mask-image": [{ mask: ["none", ej, ef] }],
            filter: [{ filter: ["", "none", ej, ef] }],
            blur: [{ blur: _() }],
            brightness: [{ brightness: [en, ej, ef] }],
            contrast: [{ contrast: [en, ej, ef] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", p, eM, ek] }],
            "drop-shadow-color": [{ "drop-shadow": F() }],
            grayscale: [{ grayscale: ["", en, ej, ef] }],
            "hue-rotate": [{ "hue-rotate": [en, ej, ef] }],
            invert: [{ invert: ["", en, ej, ef] }],
            saturate: [{ saturate: [en, ej, ef] }],
            sepia: [{ sepia: ["", en, ej, ef] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none", ej, ef] }],
            "backdrop-blur": [{ "backdrop-blur": _() }],
            "backdrop-brightness": [{ "backdrop-brightness": [en, ej, ef] }],
            "backdrop-contrast": [{ "backdrop-contrast": [en, ej, ef] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": ["", en, ej, ef] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [en, ej, ef] }],
            "backdrop-invert": [{ "backdrop-invert": ["", en, ej, ef] }],
            "backdrop-opacity": [{ "backdrop-opacity": [en, ej, ef] }],
            "backdrop-saturate": [{ "backdrop-saturate": [en, ej, ef] }],
            "backdrop-sepia": [{ "backdrop-sepia": ["", en, ej, ef] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": z() }],
            "border-spacing-x": [{ "border-spacing-x": z() }],
            "border-spacing-y": [{ "border-spacing-y": z() }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "",
                  "all",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  "none",
                  ej,
                  ef,
                ],
              },
            ],
            "transition-behavior": [{ transition: ["normal", "discrete"] }],
            duration: [{ duration: [en, "initial", ej, ef] }],
            ease: [{ ease: ["linear", "initial", b, ej, ef] }],
            delay: [{ delay: [en, ej, ef] }],
            animate: [{ animate: ["none", x, ej, ef] }],
            backface: [{ backface: ["hidden", "visible"] }],
            perspective: [{ perspective: [f, ej, ef] }],
            "perspective-origin": [{ "perspective-origin": w() }],
            rotate: [{ rotate: Y() }],
            "rotate-x": [{ "rotate-x": Y() }],
            "rotate-y": [{ "rotate-y": Y() }],
            "rotate-z": [{ "rotate-z": Y() }],
            scale: [{ scale: K() }],
            "scale-x": [{ "scale-x": K() }],
            "scale-y": [{ "scale-y": K() }],
            "scale-z": [{ "scale-z": K() }],
            "scale-3d": ["scale-3d"],
            skew: [{ skew: J() }],
            "skew-x": [{ "skew-x": J() }],
            "skew-y": [{ "skew-y": J() }],
            transform: [{ transform: [ej, ef, "", "none", "gpu", "cpu"] }],
            "transform-origin": [{ origin: w() }],
            "transform-style": [{ transform: ["3d", "flat"] }],
            translate: [{ translate: X() }],
            "translate-x": [{ "translate-x": X() }],
            "translate-y": [{ "translate-y": X() }],
            "translate-z": [{ "translate-z": X() }],
            "translate-none": ["translate-none"],
            accent: [{ accent: F() }],
            appearance: [{ appearance: ["none", "auto"] }],
            "caret-color": [{ caret: F() }],
            "color-scheme": [
              {
                scheme: [
                  "normal",
                  "dark",
                  "light",
                  "light-dark",
                  "only-dark",
                  "only-light",
                ],
              },
            ],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  ej,
                  ef,
                ],
              },
            ],
            "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
            "pointer-events": [{ "pointer-events": ["auto", "none"] }],
            resize: [{ resize: ["none", "", "y", "x"] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": z() }],
            "scroll-mx": [{ "scroll-mx": z() }],
            "scroll-my": [{ "scroll-my": z() }],
            "scroll-ms": [{ "scroll-ms": z() }],
            "scroll-me": [{ "scroll-me": z() }],
            "scroll-mbs": [{ "scroll-mbs": z() }],
            "scroll-mbe": [{ "scroll-mbe": z() }],
            "scroll-mt": [{ "scroll-mt": z() }],
            "scroll-mr": [{ "scroll-mr": z() }],
            "scroll-mb": [{ "scroll-mb": z() }],
            "scroll-ml": [{ "scroll-ml": z() }],
            "scroll-p": [{ "scroll-p": z() }],
            "scroll-px": [{ "scroll-px": z() }],
            "scroll-py": [{ "scroll-py": z() }],
            "scroll-ps": [{ "scroll-ps": z() }],
            "scroll-pe": [{ "scroll-pe": z() }],
            "scroll-pbs": [{ "scroll-pbs": z() }],
            "scroll-pbe": [{ "scroll-pbe": z() }],
            "scroll-pt": [{ "scroll-pt": z() }],
            "scroll-pr": [{ "scroll-pr": z() }],
            "scroll-pb": [{ "scroll-pb": z() }],
            "scroll-pl": [{ "scroll-pl": z() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              {
                "will-change": [
                  "auto",
                  "scroll",
                  "contents",
                  "transform",
                  ej,
                  ef,
                ],
              },
            ],
            fill: [{ fill: ["none", ...F()] }],
            "stroke-w": [{ stroke: [en, ez, eg, eb] }],
            stroke: [{ stroke: ["none", ...F()] }],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "inset-bs",
              "inset-be",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-x",
              "border-w-y",
              "border-w-s",
              "border-w-e",
              "border-w-bs",
              "border-w-be",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-x",
              "border-color-y",
              "border-color-s",
              "border-color-e",
              "border-color-bs",
              "border-color-be",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": [
              "translate",
              "translate-x",
              "translate-y",
              "translate-z",
            ],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mbs",
              "scroll-mbe",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pbs",
              "scroll-pbe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
          orderSensitiveModifiers: [
            "*",
            "**",
            "after",
            "backdrop",
            "before",
            "details-content",
            "file",
            "first-letter",
            "first-line",
            "marker",
            "placeholder",
            "selection",
          ],
        };
      });
    function eG({
      variant: e = "primary",
      delay: a = 0,
      reduced: r = !1,
      className: n,
      style: s,
      disabled: o,
      ...i
    }) {
      let l =
        r || o
          ? void 0
          : { animation: `mvBtnIn 600ms ${a}s var(--ease-expo) both` };
      return (0, t.jsx)("button", {
        type: "button",
        disabled: o,
        className: (function (...e) {
          return eH(
            (function () {
              for (var e, t, a = 0, r = "", n = arguments.length; a < n; a++)
                (e = arguments[a]) &&
                  (t = (function e(t) {
                    var a,
                      r,
                      n = "";
                    if ("string" == typeof t || "number" == typeof t) n += t;
                    else if ("object" == typeof t)
                      if (Array.isArray(t)) {
                        var s = t.length;
                        for (a = 0; a < s; a++)
                          t[a] && (r = e(t[a])) && (n && (n += " "), (n += r));
                      } else for (r in t) t[r] && (n && (n += " "), (n += r));
                    return n;
                  })(e)) &&
                  (r && (r += " "), (r += t));
              return r;
            })(e),
          );
        })("mv-btn", "primary" === e ? "mv-btn-primary" : "mv-btn-ghost", n),
        style: { ...l, ...s },
        ...i,
      });
    }
    let eO = $("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]),
      eU = $("chevron-left", [
        ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
      ]),
      eq = $("chevron-right", [
        ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
      ]),
      e_ = "var(--letter-paper)",
      eY = "var(--letter-paper-edge)",
      eZ = "var(--letter-ink)",
      eK = "var(--letter-rule)",
      eJ = "var(--polaroid-slip-accent)",
      eX = "var(--accent)",
      eV = "var(--accent-strong)",
      eQ = "var(--accent-dim)",
      e0 = "var(--accent-alt)",
      e1 = "var(--text-primary)",
      e2 = "var(--font-brand), ui-serif, Georgia, serif",
      e5 = [
        ["#f2dfb0", "#c4a35f"],
        ["#f0bfc5", "#c87a85"],
        ["#c3b8e0", "#7e6fa8"],
        ["#a8c6da", "#5f7e9b"],
      ],
      e3 = {
        0: 0.5,
        1: 0.56,
        2: 0.46,
        3: 0.48,
        4: 0.66,
        5: 0.5,
        6: 0.44,
        7: 0.32,
        8: 0.5,
        9: 0.55,
      },
      e6 = [
        "/birthday/images/birthday/surprise-party/decor/balloon-blush-01.svg",
        "/birthday/images/birthday/surprise-party/decor/balloon-cream-01.svg",
        "/birthday/images/birthday/surprise-party/decor/balloon-sage-01.svg",
        "/birthday/images/birthday/surprise-party/decor/balloon-blue-01.svg",
      ],
      e4 = [
        "/birthday/images/birthday/secret-bouquet/intro/petal-cream-broad-01.webp",
        "/birthday/images/birthday/secret-bouquet/intro/petal-blush-broad-01.webp",
        "/birthday/images/birthday/secret-bouquet/intro/petal-peach-broad-01.webp",
        "/birthday/images/birthday/secret-bouquet/intro/petal-peach-long-01.webp",
      ],
      e8 = "var(--room-gradient)";
    function e9({
      photos: e,
      index: r,
      onIndexChange: n,
      onClose: s,
      reduced: o,
    }) {
      let i = l(),
        c = (0, a.useRef)(null),
        d = (0, a.useCallback)(
          (t) => {
            null !== r && n((r + t + e.length) % e.length);
          },
          [r, n, e.length],
        );
      if (
        ((0, a.useEffect)(() => {
          if (null === r) return;
          let e = (e) => {
            "Escape" === e.key
              ? (e.preventDefault(), s())
              : "ArrowRight" === e.key
                ? (e.preventDefault(), d(1))
                : "ArrowLeft" === e.key && (e.preventDefault(), d(-1));
          };
          document.addEventListener("keydown", e);
          let t = document.body.style.overflow;
          return (
            (document.body.style.overflow = "hidden"),
            c.current?.focus(),
            () => {
              (document.removeEventListener("keydown", e),
                (document.body.style.overflow = t));
            }
          );
        }, [r, s, d]),
        null === r)
      )
        return null;
      let u = e[r];
      return u
        ? (0, t.jsxs)("div", {
            role: "dialog",
            "aria-modal": "true",
            "aria-label": u.alt,
            className:
              "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8",
            style: {
              background: "var(--surface-scrim)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              animation: o ? void 0 : "mvFadeIn 260ms var(--ease-soft) both",
            },
            onClick: s,
            children: [
              (0, t.jsx)("button", {
                ref: c,
                type: "button",
                onClick: s,
                "aria-label": i.lightbox.close,
                className:
                  "mv-btn mv-btn-ghost absolute right-4 top-4 z-10 size-11 !p-0 sm:right-6 sm:top-6",
                children: (0, t.jsx)(eO, { size: 20, "aria-hidden": !0 }),
              }),
              e.length > 1
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("button", {
                        type: "button",
                        onClick: (e) => {
                          (e.stopPropagation(), d(-1));
                        },
                        "aria-label": i.lightbox.prev,
                        className:
                          "mv-btn mv-btn-ghost absolute left-3 z-10 size-11 !p-0 sm:left-6",
                        children: (0, t.jsx)(eU, {
                          size: 22,
                          "aria-hidden": !0,
                        }),
                      }),
                      (0, t.jsx)("button", {
                        type: "button",
                        onClick: (e) => {
                          (e.stopPropagation(), d(1));
                        },
                        "aria-label": i.lightbox.nextPhoto,
                        className:
                          "mv-btn mv-btn-ghost absolute right-3 z-10 size-11 !p-0 sm:right-6",
                        children: (0, t.jsx)(eq, {
                          size: 22,
                          "aria-hidden": !0,
                        }),
                      }),
                    ],
                  })
                : null,
              (0, t.jsxs)("figure", {
                className: "flex max-h-full flex-col items-center gap-4",
                onClick: (e) => e.stopPropagation(),
                children: [
                  (0, t.jsx)("img", {
                    src: u.src,
                    alt: u.alt,
                    className:
                      "max-h-[72vh] w-auto max-w-full rounded-xl object-contain",
                    style: { boxShadow: "0 40px 90px -30px rgba(0,0,0,.9)" },
                  }),
                  (0, t.jsxs)("figcaption", {
                    className: "text-center",
                    children: [
                      u.caption
                        ? (0, t.jsx)("p", {
                            className: "mv-body text-sm",
                            children: u.caption,
                          })
                        : null,
                      (0, t.jsx)("p", {
                        className: "mt-1 text-[0.75rem]",
                        style: {
                          color: eQ,
                          fontVariantNumeric: "tabular-nums",
                        },
                        children: i.lightbox.counter(r + 1, e.length),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : null;
    }
    let e7 = {
        0: [
          "..#####..",
          ".#######.",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          ".#######.",
          "..#####..",
        ],
        1: [
          "..##.",
          ".###.",
          "####.",
          "..##.",
          "..##.",
          "..##.",
          "..##.",
          "..##.",
          "..##.",
          "..##.",
          "..##.",
          "#####",
          "#####",
        ],
        2: [
          "..#####..",
          ".#######.",
          "......##.",
          "......##.",
          "......##.",
          ".....##..",
          "....##...",
          "...##....",
          "..##.....",
          ".##......",
          "##.......",
          "#########",
          "#########",
        ],
        3: [
          "..#####..",
          ".#######.",
          "......##.",
          "......##.",
          "......##.",
          "...#####.",
          "...#####.",
          "......##.",
          "......##.",
          "......##.",
          ".#######.",
          ".#######.",
          "..#####..",
        ],
        4: [
          "...##...##",
          "...##...##",
          "..##....##",
          "..##....##",
          ".##.....##",
          ".##.....##",
          "##......##",
          "##########",
          "##########",
          "........##",
          "........##",
          "........##",
          "........##",
        ],
        5: [
          "#########",
          "#########",
          "##.......",
          "##.......",
          "##.......",
          "##.......",
          "#########",
          "#########",
          ".......##",
          ".......##",
          ".......##",
          ".#######.",
          "..#####..",
        ],
        6: [
          "......##.",
          ".....###.",
          "....###..",
          "..####...",
          ".###.....",
          ".###.....",
          "..#####..",
          ".#######.",
          ".##...##.",
          ".##...##.",
          ".##...##.",
          ".#######.",
          "..#####..",
        ],
        7: [
          "#########",
          "#########",
          "......##.",
          "......##.",
          ".....##..",
          ".....##..",
          "....##...",
          "....##...",
          "...##....",
          "...##....",
          "..##.....",
          "..##.....",
          "..##.....",
        ],
        8: [
          ".#######.",
          "#########",
          "##.....##",
          "##.....##",
          "##.....##",
          "#########",
          "#########",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "#########",
          ".#######.",
        ],
        9: [
          "..#####..",
          ".#######.",
          ".##...##.",
          ".##...##.",
          ".##...##.",
          ".##...##.",
          ".#######.",
          ".#######.",
          "......##.",
          "......##.",
          "......##.",
          "......##.",
          "......##.",
        ],
        A: [
          "...###...",
          "...###...",
          "..##.##..",
          "..##.##..",
          ".##...##.",
          ".##...##.",
          "##.....##",
          "#########",
          "#########",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
        ],
        B: [
          "#######..",
          "########.",
          "##.....##",
          "##.....##",
          "##.....##",
          "########.",
          "########.",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "########.",
          "#######..",
        ],
        C: [
          "..#####..",
          ".#######.",
          "##.....##",
          "##.......",
          "##.......",
          "##.......",
          "##.......",
          "##.......",
          "##.......",
          "##.......",
          "##.....##",
          ".#######.",
          "..#####..",
        ],
        D: [
          "#######..",
          "#######..",
          "##....##.",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##....##.",
          "#######..",
          "#######..",
        ],
        E: [
          "#########",
          "#########",
          "##.......",
          "##.......",
          "##.......",
          "##.......",
          "#######..",
          "#######..",
          "##.......",
          "##.......",
          "##.......",
          "#########",
          "#########",
        ],
        F: [
          "#########",
          "#########",
          "##.......",
          "##.......",
          "##.......",
          "##.......",
          "#########",
          "#########",
          "##.......",
          "##.......",
          "##.......",
          "##.......",
          "##.......",
        ],
        G: [
          "..#####..",
          ".#######.",
          "##.......",
          "##.......",
          "##.......",
          "##.......",
          "##...####",
          "##...####",
          "##.....##",
          "##.....##",
          "##.....##",
          ".#######.",
          "..#####..",
        ],
        H: [
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "#########",
          "#########",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
        ],
        I: [
          "########",
          "########",
          "...##...",
          "...##...",
          "...##...",
          "...##...",
          "...##...",
          "...##...",
          "...##...",
          "...##...",
          "...##...",
          "########",
          "########",
        ],
        J: [
          "......##.",
          "......##.",
          "......##.",
          "......##.",
          "......##.",
          "......##.",
          "......##.",
          "......##.",
          ".##...##.",
          ".##...##.",
          ".##...##.",
          ".#######.",
          ".#######.",
        ],
        K: [
          "##.....##",
          "##....##.",
          "##...##..",
          "##..##...",
          "##.##....",
          "####.....",
          "###......",
          "####.....",
          "##.##....",
          "##..##...",
          "##...##..",
          "##....##.",
          "##.....##",
        ],
        L: [
          "##.......",
          "##.......",
          "##.......",
          "##.......",
          "##.......",
          "##.......",
          "##.......",
          "##.......",
          "##.......",
          "##.......",
          "##.......",
          "#########",
          "#########",
        ],
        M: [
          "####...####",
          "####...####",
          "##.##.##.##",
          "##.##.##.##",
          "##..###..##",
          "##..###..##",
          "##...#...##",
          "##.......##",
          "##.......##",
          "##.......##",
          "##.......##",
          "##.......##",
          "##.......##",
        ],
        N: [
          "####...##",
          "####...##",
          "####...##",
          "##.##..##",
          "##.##..##",
          "##.##..##",
          "##..##.##",
          "##..##.##",
          "##..##.##",
          "##...####",
          "##...####",
          "##...####",
          "##...####",
        ],
        O: [
          "..#####..",
          ".#######.",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          ".#######.",
          "..#####..",
        ],
        P: [
          "#########",
          "#########",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "#########",
          "#########",
          "##.......",
          "##.......",
          "##.......",
          "##.......",
          "##.......",
        ],
        Q: [
          "..#####..",
          ".#######.",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          ".#######.",
          "..#####..",
          "......##.",
          ".......##",
        ],
        R: [
          ".#######.",
          "#########",
          "##.....##",
          "##.....##",
          "##.....##",
          "#########",
          "#########",
          "####.....",
          "##.##....",
          "##..##...",
          "##...##..",
          "##....##.",
          "##.....##",
        ],
        S: [
          "..#####..",
          ".#######.",
          "##.......",
          "##.......",
          "##.......",
          "#########",
          "#########",
          ".......##",
          ".......##",
          ".......##",
          ".......##",
          ".#######.",
          "..#####..",
        ],
        T: [
          "########",
          "########",
          "...##...",
          "...##...",
          "...##...",
          "...##...",
          "...##...",
          "...##...",
          "...##...",
          "...##...",
          "...##...",
          "...##...",
          "...##...",
        ],
        U: [
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          "##.....##",
          ".#######.",
          "..#####..",
        ],
        V: [
          "##.......##",
          "##.......##",
          "##.......##",
          ".##.....##.",
          ".##.....##.",
          ".##.....##.",
          "..##...##..",
          "..##...##..",
          "..##...##..",
          "...##.##...",
          "...##.##...",
          "....###....",
          "....###....",
        ],
        W: [
          "##..###..##",
          "##..###..##",
          "##..###..##",
          ".###...###.",
          ".###...###.",
          ".###...###.",
          ".###...###.",
          ".###...###.",
          "..##...##..",
          "..##...##..",
          "..##...##..",
          "..##...##..",
          "..##...##..",
        ],
        X: [
          "##.....##",
          ".##...##.",
          ".##...##.",
          "..##.##..",
          "..##.##..",
          "...###...",
          "...###...",
          "...###...",
          "..##.##..",
          "..##.##..",
          ".##...##.",
          ".##...##.",
          "##.....##",
        ],
        Y: [
          "##......##",
          "##......##",
          ".##....##.",
          ".##....##.",
          "..##..##..",
          "...####...",
          "....##....",
          "....##....",
          "....##....",
          "....##....",
          "....##....",
          "....##....",
          "....##....",
        ],
        Z: [
          "#########",
          "#########",
          ".......##",
          "......##.",
          ".....##..",
          "....##...",
          "....##...",
          "...##....",
          "..##.....",
          ".##......",
          "##.......",
          "#########",
          "#########",
        ],
      },
      te = [
        ".###...###.",
        "###########",
        "###########",
        "###########",
        "###########",
        "###########",
        ".#########.",
        ".#########.",
        "..#######..",
        "...#####...",
        "...#####...",
        "....###....",
        ".....#.....",
      ],
      tt = 240 / 170,
      ta = [
        "var(--bloom-shard-a)",
        "var(--bloom-shard-b)",
        "var(--bloom-shard-c)",
      ];
    function tr({
      age: e,
      recipientName: r,
      photos: n,
      onNext: s,
      reduced: o,
    }) {
      let i = l(),
        [c, d] = (0, a.useState)(!1),
        u = (0, a.useMemo)(() => {
          let t = e?.trim();
          if (t && /^\d{1,2}$/.test(t)) return t;
          let a = r.trim().charAt(0);
          return a ? a.toUpperCase() : "♥";
        }, [e, r]),
        {
          shards: m,
          cellW: p,
          cellH: h,
          box: f,
        } = (0, a.useMemo)(
          () =>
            (function (e) {
              let t = e.split("");
              if (0 === t.length)
                return {
                  shards: [],
                  cellW: 0,
                  cellH: 0,
                  box: { x0: 0, x1: 1, y0: 0, y1: 1 },
                };
              let a = t.map((e) =>
                  (function (e) {
                    let t = e.length,
                      a = e[0].length,
                      r = [];
                    for (let n = 0; n < t; n++) {
                      let s = e[n];
                      for (let e = 0; e < a; e++)
                        "#" === s[e] &&
                          r.push({ x: (e + 0.5) / a, y: (n + 0.5) / t });
                    }
                    return { pts: r, aspect: a / t, rows: t };
                  })(e7[e] ?? e7[e.toUpperCase()] ?? te),
                ),
                r = a.map((e) => e.aspect),
                n = r.reduce((e, t) => e + t, 0) + 0.14 * (t.length - 1),
                s = n >= tt,
                o = s ? 1 / n : 1 / tt,
                i = s ? tt / n : 1,
                l = s ? 0 : (tt - n) / 2,
                c = [];
              a.forEach((e, t) => {
                (e.pts.forEach((e) => {
                  c.push({ x: (l + e.x * r[t]) * o, y: 0.5 + (e.y - 0.5) * i });
                }),
                  (l += r[t] + 0.14));
              });
              let d = c.map((e, t) => {
                  let a = (e) => {
                      let a;
                      return ((a =
                        Math.imul(7 * t + e + 1, 0x165667b1) ^
                        Math.imul(4, 0x27d4eb2f)),
                      () => {
                        a |= 0;
                        let e = Math.imul(
                          (a = (a + 0x6d2b79f5) | 0) ^ (a >>> 15),
                          1 | a,
                        );
                        return (
                          (((e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e) ^
                            (e >>> 14)) >>>
                            0) /
                          0x100000000
                        );
                      })();
                    },
                    r = a(1) * Math.PI * 2;
                  return {
                    ...e,
                    rot: (a(2) - 0.5) * 14,
                    scale: 0.92 + 0.22 * a(3),
                    delay: 2.2 * a(4),
                    fromX: Math.cos(r) * (40 + 50 * a(5)),
                    fromY: Math.sin(r) * (36 + 44 * a(6)),
                  };
                }),
                u = a[0].rows,
                m = o / u,
                p = i / u,
                h = c.map((e) => e.x),
                f = c.map((e) => e.y);
              return {
                shards: d,
                cellW: m,
                cellH: p,
                box: {
                  x0: Math.min(...h) - m / 2,
                  x1: Math.max(...h) + m / 2,
                  y0: Math.min(...f) - p / 2,
                  y1: Math.max(...f) + p / 2,
                },
              };
            })(u),
          [u],
        ),
        b = n.length > 0,
        [x, y] = (0, a.useState)(null),
        v = (0, a.useRef)(null),
        w = (0, a.useCallback)(() => {
          (y(null), v.current?.focus());
        }, []),
        k = (0, a.useCallback)(
          // Cycle through every photo by tile so sparse digit columns do not
          // hide photos or give some photos more space than others.
          (tileIndex) => tileIndex % Math.max(1, n.length),
          [n.length],
        ),
        j = (0, a.useCallback)(
          (e) => {
            let t = f.x1 - f.x0 || 1,
              a = (e.x - f.x0) / t;
            return { animationDelay: `${(2 + 1.8 * a).toFixed(2)}s` };
          },
          [f.x0, f.x1],
        ),
        z = (0, a.useMemo)(() => {
          let e = new Map();
          return (
            m.forEach((t, a) => {
              let r = k(a);
              e.has(r) || e.set(r, a);
            }),
            e
          );
        }, [k, m]);
      (0, a.useEffect)(() => {
        let e = setTimeout(() => d(!0), o ? 700 : 4600);
        return () => clearTimeout(e);
      }, [o]);
      let N =
        u.length > 1 ? "clamp(14px, 4.4vw, 22px)" : "clamp(16px, 5vw, 26px)";
      return (0, t.jsxs)("div", {
        className:
          "relative flex min-h-[100dvh] w-full flex-col items-center justify-center gap-6 px-6 py-16 text-center",
        children: [
          (0, t.jsx)("style", {
            children: `
        @keyframes spBloomBreathe { 0%,100%{transform:scale(1)} 50%{transform:scale(1.025)} }
        @keyframes spShardIn {
          from {
            opacity: 0;
            transform: translate(var(--sp-from-x), var(--sp-from-y))
              rotate(var(--sp-rot-from)) scale(0.3);
          }
          to {
            opacity: 1;
            transform: translate(0, 0) rotate(var(--sp-rot)) scale(var(--sp-scale));
          }
        }
      `,
          }),
          (0, t.jsx)("div", {
            className: "relative w-full",
            style: { maxWidth: b ? 460 : 380 },
            children: (0, t.jsx)("div", {
              style: o
                ? void 0
                : { animation: "spBloomBreathe 4.2s ease-in-out infinite" },
              children: (0, t.jsxs)("div", {
                className: "relative w-full",
                style: { aspectRatio: "240 / 170" },
                children: [
                  (0, t.jsx)("div", {
                    "aria-hidden": !0,
                    className: "pointer-events-none absolute inset-[-12%]",
                    style: { background: "var(--bloom-halo)" },
                  }),
                  b
                    ? (0, t.jsx)("div", {
                        className: "mv-mosaic absolute inset-0",
                        children: m.map((e, a) => {
                          let r = k(a),
                            s = n[r],
                            l = a === z.get(r);
                          return (0, t.jsxs)(
                            "button",
                            {
                              type: "button",
                              tabIndex: l ? 0 : -1,
                              "aria-hidden": !l || void 0,
                              "aria-label": l ? i.lightbox.open(s.alt) : void 0,
                              onClick: (e) => {
                                ((v.current = e.currentTarget), y(r));
                              },
                              className:
                                "mv-mosaic-tile absolute cursor-pointer overflow-hidden p-0",
                              style: {
                                left: `${100 * e.x}%`,
                                top: `${100 * e.y}%`,
                                width: `${100 * p}%`,
                                height: `${100 * h}%`,
                                marginLeft: `${-50 * p}%`,
                                marginTop: `${-50 * h}%`,
                                borderRadius: 2,
                                transform: "translate(0, 0)",
                                "--sp-from-x": `${e.fromX}vmin`,
                                "--sp-from-y": `${e.fromY}vmin`,
                                "--sp-rot-from": `${8 * e.rot}deg`,
                                "--sp-rot": "0deg",
                                "--sp-scale": 1,
                                animation: o
                                  ? void 0
                                  : `spShardIn 1100ms ${(0.5 + e.delay).toFixed(3)}s cubic-bezier(.16,.9,.3,1) both`,
                              },
                              children: [
                                (0, t.jsx)("img", {
                                  src: s.src,
                                  alt: "",
                                  "aria-hidden": !0,
                                  className:
                                    "pointer-events-none absolute max-w-none object-cover",
                                  style: {
                                    filter: "saturate(1.14) brightness(0.96)",
                                    width: "100%",
                                    height: "100%",
                                    left: 0,
                                    top: 0,
                                  },
                                }),
                                (0, t.jsx)("span", {
                                  "aria-hidden": !0,
                                  className: "mv-mosaic-veil",
                                  style: j(e),
                                }),
                              ],
                            },
                            a,
                          );
                        }),
                      })
                    : m.map((e, a) =>
                        (0, t.jsx)(
                          "div",
                          {
                            "aria-hidden": !0,
                            className: "absolute",
                            style: {
                              left: `${100 * e.x}%`,
                              top: `${100 * e.y}%`,
                              width: N,
                              height: N,
                              marginLeft: `calc(${N} / -2)`,
                              marginTop: `calc(${N} / -2)`,
                              transform: `rotate(${e.rot}deg) scale(${e.scale})`,
                              "--sp-from-x": `${e.fromX}vmin`,
                              "--sp-from-y": `${e.fromY}vmin`,
                              "--sp-rot-from": `${8 * e.rot}deg`,
                              "--sp-rot": `${e.rot}deg`,
                              "--sp-scale": e.scale,
                              animation: o
                                ? void 0
                                : `spShardIn 1100ms ${(0.5 + e.delay).toFixed(3)}s cubic-bezier(.16,.9,.3,1) both`,
                            },
                            children: (0, t.jsx)("span", {
                              className: "block h-full w-full",
                              style: {
                                borderRadius: "32%",
                                background: `radial-gradient(circle at 38% 32%, var(--bloom-shard-hi) 0%, ${ta[a % ta.length]} 78%)`,
                                boxShadow: "var(--bloom-shard-glow)",
                              },
                            }),
                          },
                          a,
                        ),
                      ),
                ],
              }),
            }),
          }),
          (0, t.jsx)("p", {
            className: "max-w-xs italic",
            style: {
              fontFamily: e2,
              fontSize: "clamp(17px, 4.6vw, 22px)",
              lineHeight: 1.4,
              color: e1,
              opacity: +!!c,
              transition: "opacity 1s ease",
            },
            children: i.bloom.caption,
          }),
          (0, t.jsx)("div", {
            className: "min-h-12",
            children: c
              ? (0, t.jsx)(eG, {
                  onClick: s,
                  reduced: o,
                  delay: 0.6,
                  children: i.bloom.next,
                })
              : null,
          }),
          (0, t.jsx)(e9, {
            photos: n,
            index: x,
            onIndexChange: y,
            onClose: w,
            reduced: o,
          }),
        ],
      });
    }
    function tn() {
      return (0, t.jsx)("svg", {
        width: "0",
        height: "0",
        "aria-hidden": !0,
        style: { position: "absolute" },
        children: (0, t.jsxs)("defs", {
          children: [
            (0, t.jsxs)("radialGradient", {
              id: "spFlameGrad",
              cx: "50%",
              cy: "70%",
              r: "65%",
              children: [
                (0, t.jsx)("stop", { offset: "0%", stopColor: "#ffe2a8" }),
                (0, t.jsx)("stop", { offset: "60%", stopColor: "#ffb45e" }),
                (0, t.jsx)("stop", { offset: "100%", stopColor: "#ef7e34" }),
              ],
            }),
            (0, t.jsxs)("radialGradient", {
              id: "spFlameCore",
              cx: "50%",
              cy: "70%",
              r: "65%",
              children: [
                (0, t.jsx)("stop", { offset: "0%", stopColor: "#fffdf2" }),
                (0, t.jsx)("stop", { offset: "100%", stopColor: "#ffd89a" }),
              ],
            }),
          ],
        }),
      });
    }
    function ts({ state: e, dir: a, delay: r, size: n }) {
      return "unlit" === e
        ? null
        : "out" === e
          ? (0, t.jsx)("span", {
              "aria-hidden": !0,
              className: "absolute left-1/2 top-0",
              style: { width: 0, height: 0 },
              children: [-1, 0, 1].map((e) =>
                (0, t.jsx)(
                  "span",
                  {
                    className: "sp-smoke absolute rounded-full",
                    style: {
                      left: -2,
                      top: -8,
                      width: 4,
                      height: 4,
                      background: "var(--smoke-puff)",
                      filter: "blur(1px)",
                      "--sp-smoke-x": `${7 * e + 4}px`,
                      animationDelay: `${0.5 * Math.abs(e)}s`,
                    },
                  },
                  e,
                ),
              ),
            })
          : (0, t.jsxs)("span", {
              "aria-hidden": !0,
              className: "absolute left-1/2",
              style: {
                top: -22 * n,
                width: 0,
                height: 0,
                transform: `rotate(calc(var(--sp-blow, 0) * ${-52 * a}deg)) scaleY(calc(1 - var(--sp-blow, 0) * 0.55)) scaleX(calc(1 + var(--sp-blow, 0) * 0.18))`,
                transformOrigin: "50% 100%",
                transition: "transform 90ms linear",
              },
              children: [
                (0, t.jsx)("span", {
                  className: "sp-flame-inner absolute block",
                  style: {
                    left: -7 * n,
                    top: 0,
                    width: 14 * n,
                    height: 22 * n,
                    animationDelay: `${r}s`,
                  },
                  children: (0, t.jsxs)("svg", {
                    viewBox: "0 0 24 40",
                    className: "h-full w-full",
                    children: [
                      (0, t.jsx)("path", {
                        d: "M12 1 C16 11 22 17 22 26 A10 11 0 0 1 2 26 C2 17 8 11 12 1 Z",
                        fill: "url(#spFlameGrad)",
                      }),
                      (0, t.jsx)("path", {
                        d: "M12 12 C14 18 17 21 17 26 A5 6 0 0 1 7 26 C7 21 10 18 12 12 Z",
                        fill: "url(#spFlameCore)",
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)("span", {
                  className: "absolute rounded-full",
                  style: {
                    left: -20 * n,
                    top: -10 * n,
                    width: 40 * n,
                    height: 40 * n,
                    background:
                      "radial-gradient(circle, rgba(255,200,130,.5) 0%, rgba(255,170,96,.14) 55%, transparent 75%)",
                    opacity: "calc(1 - var(--sp-blow, 0) * .7)",
                  },
                }),
              ],
            });
    }
    function to({ targets: e, travelMs: r, perCandleMs: n }) {
      let [s, o] = (0, a.useState)(0),
        [i, l] = (0, a.useState)(!1),
        c = (0, a.useCallback)((e) => {
          e && o(e.clientWidth);
        }, []),
        d = r + Math.max(1, e.length) * n + 600,
        u = (0.62 * r) / d;
      (0, a.useEffect)(() => {
        let e = setTimeout(() => l(!0), d * u);
        return () => clearTimeout(e);
      }, [u, d]);
      let m = (0, a.useMemo)(() => {
          if (0 === e.length) return null;
          let t = { xPct: Math.min(96, e[0].xPct + 24), yPx: e[0].yPx + 42 },
            a = [120, t.xPct, t.xPct],
            s = [46, t.yPx, t.yPx],
            o = [0, (0.42 * r) / d, (0.8 * r) / d],
            i = [0, 0.9, 1];
          return (
            e.forEach((e, t) => {
              (a.push(e.xPct, e.xPct),
                s.push(e.yPx, e.yPx),
                o.push((r + t * n + 0.2 * n) / d, (r + t * n + 0.9 * n) / d),
                i.push(1, 1));
            }),
            a.push(e[e.length - 1].xPct + 55),
            s.push(30),
            o.push(1),
            i.push(0),
            { xs: a, ys: s, times: o, opacities: i }
          );
        }, [n, e, d, r]),
        p = (0, a.useMemo)(() => {
          if (!m || 0 === s) return "";
          let e = m.times.map((e, t) => {
            let a = ((m.xs[t] / 100) * s).toFixed(2);
            return `${(100 * e).toFixed(3)}% { transform: translate(${a}px, ${m.ys[t]}px); opacity: ${m.opacities[t]}; }`;
          });
          return `@keyframes spMatchPath { ${e.join(" ")} }`;
        }, [m, s]);
      return 0 === e.length
        ? null
        : (0, t.jsx)("div", {
            ref: c,
            "aria-hidden": !0,
            className: "pointer-events-none absolute inset-x-0 top-0",
            children:
              s > 0
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("style", { children: p }),
                      (0, t.jsx)("div", {
                        className: "absolute z-30",
                        style: {
                          left: 0,
                          top: 0,
                          animation: `spMatchPath ${d}ms ease-in-out forwards`,
                        },
                        children: (0, t.jsxs)("div", {
                          className: "relative",
                          style: { width: 0, height: 0 },
                          children: [
                            (0, t.jsx)("span", {
                              className: "absolute rounded-full",
                              style: {
                                left: -30,
                                top: -30,
                                width: 60,
                                height: 60,
                                background:
                                  "radial-gradient(circle, rgba(255,200,130,.55) 0%, rgba(255,170,96,.18) 50%, transparent 72%)",
                                opacity: +!!i,
                                transition: "opacity 300ms ease",
                              },
                            }),
                            i
                              ? (0, t.jsx)("span", {
                                  className: "absolute rounded-full",
                                  style: {
                                    left: -8,
                                    top: -8,
                                    width: 16,
                                    height: 16,
                                    border: "2px solid rgba(255,224,160,.95)",
                                    animation:
                                      "spMatchStrike 550ms ease-out forwards",
                                  },
                                })
                              : null,
                            (0, t.jsx)("span", {
                              className: "absolute block",
                              style: {
                                left: 0,
                                top: 0,
                                width: 0,
                                height: 0,
                                transformOrigin: "0px 2px",
                                opacity: +!!i,
                                animation: i
                                  ? "spMatchFlameIn 500ms ease-out forwards"
                                  : void 0,
                              },
                              children: (0, t.jsx)("span", {
                                className: "sp-flame-inner absolute",
                                style: {
                                  left: -6.5,
                                  top: -18,
                                  width: 13,
                                  height: 20,
                                },
                                children: (0, t.jsxs)("svg", {
                                  viewBox: "0 0 24 40",
                                  className: "h-full w-full",
                                  children: [
                                    (0, t.jsx)("path", {
                                      d: "M12 1 C16 11 22 17 22 26 A10 11 0 0 1 2 26 C2 17 8 11 12 1 Z",
                                      fill: "url(#spFlameGrad)",
                                    }),
                                    (0, t.jsx)("path", {
                                      d: "M12 12 C14 18 17 21 17 26 A5 6 0 0 1 7 26 C7 21 10 18 12 12 Z",
                                      fill: "url(#spFlameCore)",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, t.jsx)("span", {
                              className: "absolute rounded-full",
                              style: {
                                left: -3.5,
                                top: -3.5,
                                width: 7,
                                height: 7,
                                background: i ? "#a83c22" : "#6e3328",
                                boxShadow: i
                                  ? "0 0 8px rgba(255,140,70,.8)"
                                  : "none",
                                transition:
                                  "background 300ms ease, box-shadow 300ms ease",
                              },
                            }),
                            (0, t.jsx)("span", {
                              className: "absolute rounded-full",
                              style: {
                                left: 0,
                                top: -2,
                                width: 78,
                                height: 4,
                                background:
                                  "linear-gradient(90deg, #c9a06b, #8f6f45)",
                                transform: "rotate(38deg)",
                                transformOrigin: "0 50%",
                              },
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : null,
          });
    }
    function ti({ digit: e, tint: a, width: r, height: n }) {
      let [s, o] = e5[a % e5.length],
        i = `spWax-${a}`;
      return (0, t.jsxs)("svg", {
        viewBox: "0 0 60 88",
        "aria-hidden": !0,
        style: { width: r, height: n, display: "block" },
        children: [
          (0, t.jsx)("defs", {
            children: (0, t.jsxs)("pattern", {
              id: i,
              width: "12",
              height: "12",
              patternTransform: "rotate(-32)",
              patternUnits: "userSpaceOnUse",
              children: [
                (0, t.jsx)("rect", { width: "12", height: "12", fill: s }),
                (0, t.jsx)("rect", { width: "6", height: "12", fill: o }),
              ],
            }),
          }),
          (0, t.jsx)("text", {
            x: "30",
            y: "74",
            textAnchor: "middle",
            fontSize: "82",
            fontWeight: 700,
            fontFamily: `${e2}, 'Arial Rounded MT Bold', Arial, sans-serif`,
            fill: `url(#${i})`,
            stroke: "rgba(61,32,30,0.5)",
            strokeWidth: "2",
            paintOrder: "stroke",
            style: { letterSpacing: "-0.02em" },
            children: e,
          }),
          (0, t.jsx)("text", {
            x: "28.4",
            y: "72.6",
            textAnchor: "middle",
            fontSize: "82",
            fontWeight: 700,
            fontFamily: `${e2}, 'Arial Rounded MT Bold', Arial, sans-serif`,
            fill: "rgba(255,255,255,0.22)",
            children: e,
          }),
        ],
      });
    }
    function tl({ tint: e, height: a }) {
      let [r, n] = e5[e % e5.length];
      return (0, t.jsx)("span", {
        "aria-hidden": !0,
        style: {
          display: "block",
          width: 8,
          height: a,
          borderRadius: 3.5,
          background: `repeating-linear-gradient(-32deg, ${r} 0 5px, ${n} 5px 9px)`,
          boxShadow: "inset 0 0 0 1px rgba(61,32,30,.25)",
        },
      });
    }
    function tc({ age: e, onAllOut: r, onBlowProgress: n, reduced: s }) {
      let o = l(),
        i = (0, a.useMemo)(
          () =>
            (function (e) {
              if ("string" != typeof e) return null;
              let t = e.trim();
              return /^\d{1,2}$/.test(t)
                ? t.split("").map((e) => parseInt(e, 10))
                : null;
            })(e),
          [e],
        ),
        c = (0, a.useMemo)(
          () =>
            i && i.length > 0
              ? i.map((e, t) => {
                  let a = (t - (i.length - 1) / 2) * 17;
                  return {
                    kind: "digit",
                    digit: e,
                    xPct: a,
                    flameXPct: a + (e3[e] - 0.5) * 15,
                    tint: t % e5.length,
                    dir: t % 2 == 0 ? 1 : -1,
                    h: 64,
                  };
                })
              : [-12, 0, 12].map((e, t) => ({
                  kind: "classic",
                  xPct: e,
                  flameXPct: e,
                  tint: t % e5.length,
                  dir: t % 2 == 0 ? 1 : -1,
                  h: 34 + (t % 2) * 10,
                })),
          [i],
        ),
        d = (0, a.useMemo)(
          () =>
            c.map((e) => {
              let t = "digit" === e.kind,
                a = (t ? e.h + 18 : e.h) - 14 * !!t + 6;
              return { xPct: 50 + e.flameXPct, yPx: -(a + 2) };
            }),
          [c],
        ),
        [u, m] = (0, a.useState)(0),
        [p, h] = (0, a.useState)(0),
        [f, g] = (0, a.useState)(!1),
        [b, x] = (0, a.useState)(!1),
        [y, v] = (0, a.useState)(!1),
        w = (0, a.useRef)(null),
        k = (0, a.useRef)(0),
        j = (0, a.useRef)(0),
        z = (0, a.useRef)(0),
        N = (0, a.useRef)(0),
        C = (0, a.useRef)(!1),
        S = (0, a.useRef)(0),
        $ = (0, a.useRef)(!1),
        M = u >= c.length,
        T = p >= c.length;
      (0, a.useEffect)(() => {
        let e = [],
          t = s ? 80 : 2100,
          a = s ? 60 : 1600,
          r = s ? 40 : 1150;
        return (
          (e.push(setTimeout(() => x(!0), t)), s)
            ? e.push(setTimeout(() => m(c.length), t))
            : (e.push(setTimeout(() => v(!0), t)),
              c.forEach((n, s) => {
                e.push(setTimeout(() => m(s + 1), t + a + s * r + 0.35 * r));
              }),
              e.push(setTimeout(() => v(!1), t + a + c.length * r + 700))),
          () => e.forEach(clearTimeout)
        );
      }, [c, s]);
      let P = (0, a.useCallback)(
          (e, t) => {
            let a = w.current;
            (a &&
              (a.style.setProperty("--sp-blow", e.toFixed(3)),
              (a.dataset.spBlowing = e > 0.12 ? "1" : "0")),
              n?.(t));
          },
          [n],
        ),
        E = (0, a.useCallback)(() => {
          if (k.current) return;
          let e = (t) => {
            let a = j.current ? Math.min(100, t - j.current) : 16;
            j.current = t;
            let n = +!!C.current;
            N.current += (n - N.current) * 0.22;
            let s = N.current < 0.01 ? 0 : N.current;
            s > 0.05 && (z.current = Math.min(1, z.current + (a / 3e3) * s));
            let o = z.current,
              i = Math.max(1, c.length);
            for (; S.current < i && o >= ((S.current + 1) / i) * 0.94; )
              if (((S.current += 1), h(S.current), S.current >= i)) {
                (P(0, 1),
                  (C.current = !1),
                  g(!1),
                  $.current || (($.current = !0), r()));
                return;
              }
            (P(s, o),
              C.current || s > 0
                ? (k.current = requestAnimationFrame(e))
                : ((k.current = 0), (j.current = 0)));
          };
          k.current = requestAnimationFrame(e);
        }, [c.length, r, P]),
        R = (0, a.useCallback)(() => {
          M && !$.current && ((C.current = !0), g(!0), E());
        }, [M, E]),
        A = (0, a.useCallback)(() => {
          ((C.current = !1), g(!1));
        }, []);
      (0, a.useEffect)(
        () => () => {
          k.current && cancelAnimationFrame(k.current);
        },
        [],
      );
      let D = b
        ? M
          ? T
            ? o.cake.extinguished(p, c.length)
            : f
              ? p / Math.max(1, c.length) >= 0.6
                ? o.cake.almostThere
                : o.cake.keepHolding
              : o.cake.inviteHold
          : o.cake.lighting
        : o.cake.enter;
      return (0, t.jsxs)("div", {
        ref: w,
        className:
          "relative flex min-h-[100dvh] w-full flex-col items-center justify-center gap-7 px-6 py-16 text-center",
        style: { touchAction: "none" },
        children: [
          (0, t.jsx)("style", {
            children: `
        @keyframes spFlick { 0%,100%{transform:rotate(-2.5deg) scaleY(1)} 30%{transform:rotate(2deg) scaleY(.95)} 55%{transform:rotate(-1deg) scaleY(1.07)} 80%{transform:rotate(1.6deg) scaleY(.96)} }
        @keyframes spFlickFast { 0%,100%{transform:rotate(-9deg) scaleY(.84)} 25%{transform:rotate(8deg) scaleY(1.08)} 50%{transform:rotate(-7deg) scaleY(.72)} 75%{transform:rotate(9deg) scaleY(1.02)} }
        .sp-flame-inner{animation:spFlick 1.5s ease-in-out infinite;transform-origin:50% 100%}
        [data-sp-blowing="1"] .sp-flame-inner{animation:spFlickFast .28s linear infinite}
        @keyframes spSmoke { 0%{transform:translate(0,0) scale(.5);opacity:0} 12%{opacity:.6} 55%{transform:translate(var(--sp-smoke-x,6px),-30px) scale(1.1);opacity:.4} 100%{transform:translate(calc(var(--sp-smoke-x,6px)*-1),-64px) scale(1.7);opacity:0} }
        .sp-smoke{animation:spSmoke 2.6s ease-out infinite}
        @keyframes spMatchStrike { from{transform:scale(.2);opacity:1} to{transform:scale(2.6);opacity:0} }
        @keyframes spMatchFlameIn { 0%{transform:scale(.1)} 60%{transform:scale(1.35)} 100%{transform:scale(1)} }
        @keyframes spCakeIn { from{opacity:0;transform:translateY(18px) scale(.96)} to{opacity:1;transform:none} }
        @keyframes spCandleIn { from{opacity:0;transform:translate(-50%,-100%) scaleY(.24)} to{opacity:1;transform:translate(-50%,-100%) scaleY(1)} }
      `,
          }),
          (0, t.jsx)(tn, {}),
          (0, t.jsxs)("div", {
            className: "relative w-full",
            style: {
              maxWidth: "min(420px, 82vw)",
              animation: s ? void 0 : "spCakeIn 900ms ease both",
            },
            children: [
              (0, t.jsxs)("div", {
                className: "pointer-events-none absolute inset-0 z-20",
                "aria-hidden": !0,
                children: [
                  y
                    ? (0, t.jsx)("div", {
                        className: "absolute inset-x-0",
                        style: { top: `${24}%` },
                        children: (0, t.jsx)(to, {
                          targets: d,
                          travelMs: 1600,
                          perCandleMs: 1150,
                        }),
                      })
                    : null,
                  c.map((e, a) => {
                    let r = "digit" === e.kind ? e.h + 18 : e.h,
                      n = "digit" === e.kind ? r - 14 : r;
                    return (0, t.jsxs)(
                      "div",
                      {
                        className: "absolute inset-0",
                        children: [
                          (0, t.jsx)("div", {
                            className: "absolute",
                            style: {
                              left: `${50 + e.xPct}%`,
                              top: `${24}%`,
                              transform: "translate(-50%, -100%)",
                              transformOrigin: "50% 100%",
                              animation: s
                                ? void 0
                                : `spCandleIn 750ms cubic-bezier(.2,.85,.3,1) ${0.55 + 0.16 * a}s both`,
                            },
                            children:
                              "digit" === e.kind
                                ? (0, t.jsx)(ti, {
                                    digit: e.digit ?? 0,
                                    tint: e.tint,
                                    width: 56,
                                    height: r,
                                  })
                                : (0, t.jsx)(tl, { tint: e.tint, height: r }),
                          }),
                          (0, t.jsx)("div", {
                            className: "absolute",
                            style: {
                              left: `${50 + e.flameXPct}%`,
                              top: `${24}%`,
                              width: 0,
                              height: 0,
                            },
                            children: (0, t.jsxs)("div", {
                              className: "relative",
                              style: { marginTop: -n },
                              children: [
                                (0, t.jsx)("span", {
                                  className: "absolute",
                                  style: {
                                    left: -1,
                                    top: -6,
                                    width: 2,
                                    height: 7,
                                    background: "#4a3a30",
                                    borderRadius: 2,
                                  },
                                }),
                                (0, t.jsx)("span", {
                                  className: "absolute",
                                  style: { left: 0, top: -6 },
                                  children: (0, t.jsx)(ts, {
                                    state:
                                      a < p ? "out" : a < u ? "lit" : "unlit",
                                    dir: e.dir,
                                    delay: (0.43 * a) % 1.2,
                                    size: "digit" === e.kind ? 1.15 : 0.85,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      },
                      a,
                    );
                  }),
                ],
              }),
              (0, t.jsx)("img", {
                src: "/birthday/images/birthday/surprise-party/props/cake-party-01.webp",
                alt: "",
                className: "relative z-10 w-full select-none",
                draggable: !1,
              }),
            ],
          }),
          (0, t.jsx)("p", {
            "aria-live": "polite",
            className: "max-w-sm",
            style: {
              fontFamily: e2,
              fontStyle: "italic",
              fontSize: "clamp(17px, 4.6vw, 21px)",
              color: e1,
              opacity: 0.92,
            },
            children: D,
          }),
          M && !T
            ? (0, t.jsx)("button", {
                type: "button",
                "aria-label": o.cake.pressHold,
                className:
                  "absolute inset-0 z-30 cursor-pointer bg-transparent",
                onPointerDown: R,
                onPointerUp: A,
                onPointerCancel: A,
                onPointerLeave: A,
                onLostPointerCapture: A,
              })
            : null,
        ],
      });
    }
    let td = [
      { x: -114, y: 48, drift: 14, duration: 9, delay: 0 },
      { x: -56, y: 92, drift: -9, duration: 11, delay: 2.4 },
      { x: 44, y: 70, drift: 12, duration: 8.5, delay: 4.1 },
      { x: 108, y: 104, drift: -14, duration: 12, delay: 1.3 },
      { x: -84, y: 128, drift: 8, duration: 10, delay: 6.2 },
      { x: 78, y: 22, drift: -6, duration: 9.5, delay: 7.5 },
    ];
    function tu({ onFlip: e, reduced: r }) {
      let n = l(),
        s = (0, a.useRef)(!1),
        o = (0, a.useRef)([]),
        [i, c] = (0, a.useState)(!1);
      (0, a.useEffect)(
        () => () => {
          o.current.forEach(clearTimeout);
        },
        [],
      );
      let d = (0, a.useCallback)(() => {
          s.current ||
            ((s.current = !0),
            c(!0),
            o.current.push(setTimeout(e, r ? 360 : 260)));
        }, [e, r]),
        u = (e) => (r ? "0ms" : `${e}ms`);
      return (0, t.jsxs)("div", {
        className:
          "relative flex min-h-[100dvh] w-full flex-col items-center justify-center gap-6 px-6 py-12 text-center",
        children: [
          (0, t.jsx)("span", {
            "aria-hidden": !0,
            className: "mv-wake pointer-events-none absolute inset-0 z-20",
            style: { background: "var(--surface-base)" },
          }),
          (0, t.jsx)("svg", {
            "aria-hidden": !0,
            style: {
              position: "absolute",
              width: 0,
              height: 0,
              overflow: "hidden",
            },
            children: (0, t.jsxs)("defs", {
              children: [
                (0, t.jsxs)("filter", {
                  id: "sketchy",
                  x: "-10%",
                  y: "-10%",
                  width: "120%",
                  height: "120%",
                  children: [
                    (0, t.jsx)("feTurbulence", {
                      type: "turbulence",
                      baseFrequency: "0.035 0.042",
                      numOctaves: 4,
                      result: "noise",
                      seed: 42,
                    }),
                    (0, t.jsx)("feDisplacementMap", {
                      in: "SourceGraphic",
                      in2: "noise",
                      scale: "4.5",
                      xChannelSelector: "R",
                      yChannelSelector: "G",
                    }),
                  ],
                }),
                (0, t.jsxs)("filter", {
                  id: "sketchy-sm",
                  x: "-18%",
                  y: "-18%",
                  width: "136%",
                  height: "136%",
                  children: [
                    (0, t.jsx)("feTurbulence", {
                      type: "turbulence",
                      baseFrequency: "0.06",
                      numOctaves: 3,
                      result: "noise",
                      seed: 7,
                    }),
                    (0, t.jsx)("feDisplacementMap", {
                      in: "SourceGraphic",
                      in2: "noise",
                      scale: "2.5",
                      xChannelSelector: "R",
                      yChannelSelector: "G",
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, t.jsx)("p", {
            className: "mv-body mv-fade-up text-[1.05rem]",
            style: { animationDelay: u(1400) },
            children: n.dark.hint,
          }),
          (0, t.jsxs)("div", {
            className: "mv-bulb mv-fade-in relative",
            "data-on": i,
            style: { animationDelay: u(500) },
            children: [
              (0, t.jsx)("span", {
                "aria-hidden": !0,
                className: "mv-switch-pool",
              }),
              td.map((e, a) =>
                (0, t.jsx)(
                  "span",
                  {
                    "aria-hidden": !0,
                    className: "mv-switch-mote",
                    style: {
                      left: `calc(50% + ${e.x}px)`,
                      top: `calc(50% + ${e.y}px)`,
                      animationDuration: `${e.duration}s`,
                      animationDelay: `${e.delay}s`,
                      "--mote-drift": `${e.drift}px`,
                    },
                  },
                  a,
                ),
              ),
              (0, t.jsxs)("label", {
                className: "theme-switch theme-switch--upright",
                children: [
                  (0, t.jsx)("input", {
                    className: "theme-switch__checkbox",
                    type: "checkbox",
                    defaultChecked: !0,
                    "aria-label": n.dark.action,
                    onChange: d,
                  }),
                  (0, t.jsxs)("div", {
                    className: "theme-switch__container",
                    children: [
                      (0, t.jsx)("div", { className: "theme-switch__clouds" }),
                      (0, t.jsx)("div", {
                        className: "theme-switch__stars-container",
                        children: (0, t.jsx)("svg", {
                          fill: "none",
                          viewBox: "0 0 144 55",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: (0, t.jsx)("path", {
                            fill: "currentColor",
                            d: "M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z",
                            clipRule: "evenodd",
                            fillRule: "evenodd",
                          }),
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "theme-switch__circle-container",
                        children: (0, t.jsx)("div", {
                          className: "theme-switch__sun-moon-container",
                          children: (0, t.jsxs)("div", {
                            className: "theme-switch__moon",
                            children: [
                              (0, t.jsx)("div", {
                                className: "theme-switch__spot",
                              }),
                              (0, t.jsx)("div", {
                                className: "theme-switch__spot",
                              }),
                              (0, t.jsx)("div", {
                                className: "theme-switch__spot",
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "theme-switch__shooting-star",
                      }),
                      (0, t.jsx)("div", {
                        className: "theme-switch__shooting-star-2",
                      }),
                      (0, t.jsx)("div", { className: "theme-switch__meteor" }),
                      (0, t.jsxs)("div", {
                        className: "theme-switch__stars-cluster",
                        children: [
                          (0, t.jsx)("div", { className: "star" }),
                          (0, t.jsx)("div", { className: "star" }),
                          (0, t.jsx)("div", { className: "star" }),
                          (0, t.jsx)("div", { className: "star" }),
                          (0, t.jsx)("div", { className: "star" }),
                        ],
                      }),
                      (0, t.jsx)("div", { className: "theme-switch__aurora" }),
                      (0, t.jsxs)("div", {
                        className: "theme-switch__comets",
                        children: [
                          (0, t.jsx)("div", { className: "comet" }),
                          (0, t.jsx)("div", { className: "comet" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, t.jsx)("p", {
            "aria-hidden": !0,
            className: "mv-body mv-fade-up text-[0.95rem]",
            style: {
              animationDelay: u(3e3),
              letterSpacing: "0.14em",
              opacity: i ? 0 : void 0,
              transition: "opacity 400ms var(--ease-soft)",
            },
            children: n.dark.action,
          }),
        ],
      });
    }
    function tm({ size: e, color: a }) {
      return (0, t.jsx)("svg", {
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        "aria-hidden": !0,
        children: (0, t.jsx)("path", {
          d: "M12 1 L14.4 9.6 L23 12 L14.4 14.4 L12 23 L9.6 14.4 L1 12 L9.6 9.6 Z",
          fill: a,
        }),
      });
    }
    function tp() {
      return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: "absolute inset-0 flex items-center justify-center",
        style: {
          background:
            "linear-gradient(165deg, #fbeadc 0%, #f6dccd 60%, #f0cfc4 100%)",
        },
        children: (0, t.jsxs)("svg", {
          viewBox: "0 0 200 150",
          style: { width: "78%" },
          children: [
            [
              { x: 70, c: e0, s: 1 },
              { x: 104, c: eX, s: 0.86 },
              { x: 134, c: "#9db3c8", s: 0.72 },
            ].map((e, a) =>
              (0, t.jsxs)(
                "g",
                {
                  transform: `translate(${e.x} ${58 - 8 * a}) scale(${e.s})`,
                  children: [
                    (0, t.jsx)("ellipse", {
                      cx: "0",
                      cy: "0",
                      rx: "20",
                      ry: "24",
                      fill: e.c,
                    }),
                    (0, t.jsx)("ellipse", {
                      cx: "-7",
                      cy: "-8",
                      rx: "6",
                      ry: "8",
                      fill: "rgba(255,255,255,0.4)",
                    }),
                    (0, t.jsx)("path", { d: "M0 24 l-4 6 h8 z", fill: e.c }),
                    (0, t.jsx)("path", {
                      d: "M0 30 C -6 44, 6 54, 0 68",
                      stroke: "rgba(91,74,62,.45)",
                      strokeWidth: "1.4",
                      fill: "none",
                    }),
                  ],
                },
                a,
              ),
            ),
            Array.from({ length: 14 }, (e, a) =>
              (0, t.jsx)(
                "circle",
                {
                  cx: 14 + ((37 * a) % 180),
                  cy: 12 + ((53 * a) % 120),
                  r: 2 + (a % 3),
                  fill: ["#c2748a", "#d8a657", "#9db3c8", "#a8bfa0"][a % 4],
                  opacity: "0.55",
                },
                `d${a}`,
              ),
            ),
          ],
        }),
      });
    }
    function th({
      recipientName: e,
      senderName: a,
      age: r,
      dateLabel: s,
      photo: o,
      wish: i,
    }) {
      let c = l(),
        d = r?.trim() ? c.keepsake.ageLine(r.trim()) : "";
      return (0, t.jsxs)("div", {
        className: "relative w-full",
        style: {
          maxWidth: 316,
          background: `linear-gradient(178deg, ${e_} 0%, ${eY} 100%)`,
          border: `1px solid ${eQ}`,
          borderRadius: 14,
          padding: "16px 16px 18px",
          boxShadow:
            "0 1px 1px rgba(0,0,0,0.35), 0 24px 54px -26px rgba(0,0,0,0.6)",
          overflow: "hidden",
          overflowWrap: "anywhere",
          wordBreak: "break-word",
        },
        children: [
          (0, t.jsx)("div", {
            "aria-hidden": !0,
            className: "pointer-events-none absolute inset-[5px]",
            style: { border: `1px solid ${eK}`, borderRadius: 10 },
          }),
          (0, t.jsx)("span", {
            "aria-hidden": !0,
            className: "absolute left-3 top-2.5 opacity-80",
            children: (0, t.jsx)(tm, { size: 11, color: eX }),
          }),
          (0, t.jsx)("span", {
            "aria-hidden": !0,
            className: "absolute right-3.5 top-[22px] opacity-70",
            children: (0, t.jsx)(tm, { size: 8, color: e0 }),
          }),
          (0, t.jsxs)("div", {
            className: "relative mt-1 flex items-center justify-center gap-2",
            children: [
              (0, t.jsx)("span", {
                "aria-hidden": !0,
                className: "h-px w-5",
                style: { background: eX },
              }),
              (0, t.jsx)("span", {
                className: "uppercase",
                style: {
                  color: eX,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.28em",
                },
                children: c.keepsake.eyebrow,
              }),
              (0, t.jsx)("span", {
                "aria-hidden": !0,
                className: "h-px w-5",
                style: { background: eX },
              }),
            ],
          }),
          (0, t.jsxs)("div", {
            className: "relative mt-3 overflow-hidden",
            style: {
              borderRadius: 8,
              aspectRatio: "4 / 3",
              background: "#efe3d2",
              border: `1px solid ${eK}`,
            },
            children: [
              o
                ? (0, t.jsx)("img", {
                    src: o.src,
                    alt: o.alt,
                    className: "absolute inset-0 h-full w-full object-cover",
                    style: { objectPosition: `50% ${100 * (o.positionY ?? 0.5)}%` },
                  })
                : (0, t.jsx)(tp, {}),
              (0, t.jsx)("div", {
                className: "absolute bottom-2 right-2",
                style: {
                  transform: "rotate(-6deg)",
                  border: `2px solid ${eZ}`,
                  color: eZ,
                  borderRadius: 8,
                  padding: "3px 8px",
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  background: "rgba(253,246,234,0.82)",
                },
                children: c.keepsake.stamp,
              }),
            ],
          }),
          (0, t.jsxs)("div", {
            className: "relative mt-3 text-center",
            children: [
              (0, t.jsx)("p", {
                style: {
                  fontFamily: e2,
                  color: eQ,
                  fontSize: 30,
                  lineHeight: 1.1,
                  margin: 0,
                },
                children: e,
              }),
              d || s
                ? (0, t.jsxs)("p", {
                    style: {
                      color: eZ,
                      fontSize: 12,
                      lineHeight: 1.4,
                      margin: "4px 0 0",
                    },
                    children: [d, d && s ? " · " : "", s],
                  })
                : null,
            ],
          }),
          i
            ? (0, t.jsxs)("div", {
                className: "relative mt-3",
                style: {
                  background: "var(--polaroid-slip)",
                  borderRadius: 10,
                  padding: "12px 14px 13px",
                  transform: "rotate(-0.6deg)",
                  boxShadow: "0 10px 22px -14px rgba(0,0,0,0.7)",
                },
                children: [
                  (0, t.jsx)("span", {
                    "aria-hidden": !0,
                    className: "absolute -top-1.5 right-3",
                    children: (0, t.jsx)(tm, { size: 13, color: eJ }),
                  }),
                  (0, t.jsx)("p", {
                    style: {
                      fontFamily: e2,
                      color: eJ,
                      fontSize: 17,
                      lineHeight: 1,
                      margin: 0,
                    },
                    children: c.keepsake.wishHeader,
                  }),
                  (0, t.jsx)("p", {
                    style: {
                      fontFamily: e2,
                      color: "var(--polaroid-slip-text)",
                      fontSize: 19,
                      lineHeight: 1.4,
                      margin: "7px 0 0",
                      whiteSpace: "pre-wrap",
                    },
                    children: i,
                  }),
                ],
              })
            : null,
          (0, t.jsx)("div", {
            className: "mt-3 flex justify-center gap-1.5 pt-2.5",
            style: { borderTop: `1px solid ${eK}` },
            children: (0, t.jsx)("span", {
              style: { fontFamily: e2, color: eZ, fontSize: 15 },
              children: n(c.keepsake.footerDefault, { sender: a }),
            }),
          }),
        ],
      });
    }
    async function sendBirthdayWish(wish, name) {
      const text = wish.trim();
      const email = String(globalThis.BIRTHDAY_CONFIG?.wishEmail || "").trim();
      if (!text || text.length > 180) throw new Error("invalid_wish");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error("missing_receiver");
      }
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 15000);
      try {
        const response = await fetch(
          `https://formsubmit.co/ajax/${encodeURIComponent(email)}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            credentials: "omit",
            signal: controller.signal,
            body: JSON.stringify({
              _subject: "Một điều ước từ món quà sinh nhật 💌",
              _template: "table",
              "Người gửi điều ước": name,
              "Điều ước": text,
            }),
          },
        );
        const result = await response.json();
        if (
          !response.ok ||
          (result.success !== true && result.success !== "true") ||
          /needs? activation|activate.*form|confirm.*email/i.test(
            result.message || "",
          )
        ) {
          throw new Error("not_confirmed");
        }
      } finally {
        clearTimeout(timer);
      }
    }
    function tf({
      recipientName: e,
      senderName: r,
      age: n,
      birthdayDate: s,
      photo: o,
      wish: i,
      onWishChange: c,
      onOpenBouquet: d,
      onRestart: u,
    }) {
      let m = l(),
        p = (0, a.useId)(),
        h = v(),
        f = (0, a.useMemo)(() => k(s, h), [s, h]),
        g = i.trim(),
        b = g.length > 0;
      const [sendState, setSendState] = (0, a.useState)("idle");
      const sending = (0, a.useRef)(false);
      const sendWish = async () => {
        if (!b || sending.current || sendState === "sent") return;
        sending.current = true;
        setSendState("sending");
        try {
          await sendBirthdayWish(g, e);
          setSendState("sent");
        } catch {
          setSendState("error");
        } finally {
          sending.current = false;
        }
      };
      return (0, t.jsxs)("div", {
        className:
          "relative flex min-h-[100dvh] w-full flex-col items-center justify-center gap-6 px-6 py-16 text-center",
        children: [
          (0, t.jsx)("style", {
            children: `
        @keyframes spKeepsakeIn {
          from { opacity: 0; transform: translateY(26px) scale(.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .sp-keepsake-in { animation: spKeepsakeIn 900ms cubic-bezier(.2,.8,.3,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .sp-keepsake-in { animation: none; }
        }
      `,
          }),
          (0, t.jsxs)("div", {
            className: "sp-keepsake-in flex w-full flex-col items-center gap-5",
            children: [
              (0, t.jsx)(th, {
                recipientName: e,
                senderName: r,
                age: n,
                dateLabel: f,
                photo: o,
                wish: g,
              }),
              (0, t.jsxs)("div", {
                className: "w-full",
                style: { maxWidth: 316 },
                children: [
                  (0, t.jsx)("label", {
                    htmlFor: p,
                    className: "sr-only",
                    children: m.keepsake.wishPrompt,
                  }),
                  (0, t.jsx)("p", {
                    "aria-hidden": !0,
                    className: "mb-2 text-center text-[13px]",
                    style: { color: e1 },
                    children: m.keepsake.wishPrompt,
                  }),
                  (0, t.jsx)("textarea", {
                    id: p,
                    value: i,
                    onChange: (e) => {
                      c(e.target.value.slice(0, 180));
                      setSendState("idle");
                    },
                    readOnly: sendState === "sending",
                    placeholder: m.keepsake.wishPlaceholder,
                    rows: 3,
                    maxLength: 180,
                    className:
                      "w-full resize-none rounded-2xl px-4 py-3 outline-none",
                    style: {
                      fontFamily: e2,
                      fontSize: 18,
                      lineHeight: 1.5,
                      color: eZ,
                      background: "rgba(255,252,246,0.9)",
                      border: `1.5px solid ${eX}`,
                      boxShadow: "inset 0 1px 3px rgba(91,74,62,0.12)",
                    },
                  }),
                  (0, t.jsxs)("p", {
                    "aria-hidden": !0,
                    className: "mt-1 text-right text-[11px]",
                    style: { color: "var(--text-muted)" },
                    children: [i.length, "/", 180],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "flex flex-col items-center gap-2.5",
                children: [
                  (0, t.jsx)(eG, {
                    onClick: sendWish,
                    disabled:
                      !b || sendState === "sending" || sendState === "sent",
                    "aria-busy": sendState === "sending",
                    reduced: !0,
                    children:
                      sendState === "sending"
                        ? "Đang gửi…"
                        : sendState === "sent"
                          ? "Đã gửi điều ước ✓"
                          : sendState === "error"
                            ? "Thử gửi lại 💌"
                            : "Gửi điều ước 💌",
                  }),
                  (sendState === "sent" || sendState === "error") && (0, t.jsx)("p", {
                    role: "status",
                    "aria-live": "polite",
                    className: "max-w-xs text-center",
                    style: {
                      fontSize: 14,
                      lineHeight: 1.5,
                      color: "var(--text-secondary)",
                    },
                    children:
                      sendState === "sent"
                        ? "Điều ước đã được gửi đến người tặng món quà 🤍"
                        : sendState === "error"
                          ? "Chưa xác nhận được việc gửi. Điều ước vẫn ở đây để bạn thử lại."
                          : null,
                  }),
                  (0, t.jsx)(eG, {
                    variant: "ghost",
                    onClick: d,
                    disabled: !b || sendState === "sending",
                    reduced: !0,
                    children: m.keepsake.bouquet,
                  }),
                  (0, t.jsx)(eG, {
                    variant: "ghost",
                    reduced: !0,
                    onClick: u,
                    disabled: sendState === "sending",
                    children: m.keepsake.restart,
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    let tg = $("map-pin", [
      [
        "path",
        {
          d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
          key: "1r0f0z",
        },
      ],
      ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
    ]);
    function tb(e) {
      return Math.min(2600, Math.max(900, (e - 96) * 1.35));
    }
    function tx({ location: e }) {
      let a = l(),
        r = `${e.latitude.toFixed(5)}, ${e.longitude.toFixed(5)}`;
      return (0, t.jsxs)("div", {
        className: "w-full max-w-[21rem] overflow-hidden text-left",
        style: {
          borderRadius: 14,
          border: `1px solid ${eK}`,
          background: `linear-gradient(180deg, ${e_} 0%, ${eY} 100%)`,
          boxShadow: "0 22px 46px -28px rgba(0,0,0,.6)",
        },
        children: [
          (0, t.jsxs)("div", {
            className: "flex items-center gap-2 px-4 py-3",
            style: { borderBottom: `1px solid ${eK}`, color: eQ },
            children: [
              (0, t.jsx)(tg, { "aria-hidden": !0, size: 16, strokeWidth: 2.2 }),
              (0, t.jsx)("span", {
                className: "font-semibold",
                style: {
                  fontSize: "clamp(12px, 3.2vw, 13px)",
                  letterSpacing: "0.06em",
                },
                children: a.letter.locationTitle,
              }),
            ],
          }),
          (0, t.jsxs)("div", {
            className: "px-4 py-4",
            children: [
              (0, t.jsx)("p", {
                style: {
                  fontFamily: e2,
                  fontSize: "clamp(17px, 4.6vw, 20px)",
                  lineHeight: 1.4,
                  color: eZ,
                },
                children: e.label,
              }),
              (0, t.jsx)("p", {
                className: "mt-1 tabular-nums",
                style: { fontSize: "clamp(11px, 3vw, 12px)", color: "#8a7a66" },
                children: r,
              }),
            ],
          }),
        ],
      });
    }
    function ty({
      body: e,
      senderName: r,
      recipientName: s,
      photo: o,
      location: i,
      onNext: c,
      reduced: d,
    }) {
      let u = l(),
        [m, p] = (0, a.useState)(d ? "open" : "rolled"),
        [h, f] = (0, a.useState)(96),
        g = (0, a.useRef)(null),
        b = (0, a.useRef)(null),
        x = (0, a.useRef)(d);
      (0, a.useEffect)(
        () => () => {
          b.current && clearTimeout(b.current);
        },
        [],
      );
      let y = (0, a.useCallback)(() => {
          if (x.current) return;
          if (((x.current = !0), d)) return void p("open");
          let e = Math.min(
            Math.max(g.current?.scrollHeight ?? 0, 96),
            Math.max(Math.round(0.68 * window.innerHeight), 96),
          );
          (f(e),
            p("unrolling"),
            (b.current = setTimeout(() => p("open"), tb(e) + 60)));
        }, [d]),
        v = d || "open" === m,
        w = tb(h);
      return (0, t.jsxs)("div", {
        className:
          "relative flex min-h-[100dvh] w-full flex-col items-center justify-center gap-6 px-6 py-16 text-center",
        children: [
          (0, t.jsx)("style", {
            children: `
        @keyframes spTapHint { 0%,100%{transform:scaleY(1);opacity:.92} 50%{transform:scaleY(1.08);opacity:1} }
        @keyframes spRollSpin { to { background-position-y: 9px } }
        @keyframes spLetterIn { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:none} }
      `,
          }),
          (0, t.jsx)("p", {
            className: "max-w-sm",
            style: {
              fontFamily: e2,
              fontStyle: "italic",
              fontSize: "clamp(17px, 4.6vw, 22px)",
              lineHeight: 1.4,
              color: e1,
            },
            children: n(u.letter.line, { sender: r }),
          }),
          (0, t.jsxs)("div", {
            className: "relative w-full max-w-md select-none",
            style: {
              animation: d
                ? void 0
                : "spLetterIn 900ms cubic-bezier(.2,.8,.3,1) both",
            },
            children: [
              (0, t.jsxs)("div", {
                className: v ? "relative" : "relative overflow-hidden",
                style: v
                  ? {
                      maxHeight: "min(68vh, 40rem)",
                      overflowY: "auto",
                      overflowX: "hidden",
                      borderRadius: 10,
                      WebkitOverflowScrolling: "touch",
                    }
                  : {
                      height: "rolled" === m ? 96 : h,
                      borderRadius: 10,
                      transition:
                        "unrolling" === m
                          ? `height ${w}ms cubic-bezier(.4,.06,.2,1)`
                          : "none",
                    },
                children: [
                  (0, t.jsxs)("div", {
                    ref: g,
                    className:
                      "relative bg-cover bg-center px-6 pb-10 pt-8 text-left sm:px-7",
                    style: {
                      backgroundImage:
                        "url(/birthday/images/birthday/surprise-party/letter/paper-letter-party-01.svg)",
                      borderRadius: 10,
                      boxShadow: "0 26px 60px -30px rgba(0,0,0,.6)",
                    },
                    children: [
                      o?.src
                        ? (0, t.jsxs)("div", {
                            className: "relative mx-auto mb-6 w-fit",
                            style: { transform: "rotate(-2.6deg)" },
                            children: [
                              (0, t.jsx)("span", {
                                "aria-hidden": !0,
                                className: "absolute left-1/2 top-0 z-10",
                                style: {
                                  width: 74,
                                  height: 22,
                                  transform:
                                    "translate(-50%, -46%) rotate(-3deg)",
                                  background: "rgba(226,214,170,.6)",
                                  boxShadow: "0 1px 2px rgba(60,40,25,.18)",
                                },
                              }),
                              (0, t.jsx)("div", {
                                style: {
                                  padding: "8px 8px 12px",
                                  background: "#fffdf6",
                                  borderRadius: 3,
                                  boxShadow:
                                    "0 12px 26px -14px rgba(60,40,25,.55)",
                                },
                                children: (0, t.jsx)("img", {
                                  src: o.src,
                                  alt: o.alt,
                                  className:
                                    "block h-auto w-full rounded-[2px] object-cover",
                                  style: { maxWidth: 172 },
                                }),
                              }),
                            ],
                          })
                        : null,
                      (0, t.jsx)("p", {
                        style: {
                          fontFamily: e2,
                          fontSize: "clamp(16px, 4.4vw, 19px)",
                          lineHeight: 1.8,
                          color: eZ,
                          whiteSpace: "pre-wrap",
                        },
                        children: e,
                      }),
                      (0, t.jsx)("p", {
                        className: "mt-6 text-right",
                        style: {
                          fontFamily: e2,
                          fontSize: "clamp(17px, 4.6vw, 20px)",
                          color: "#7a5a48",
                        },
                        children: `— ${r}, ${u.letter.connector} ${s}`,
                      }),
                    ],
                  }),
                  v
                    ? null
                    : (0, t.jsx)("div", {
                        "aria-hidden": !0,
                        className:
                          "pointer-events-none absolute inset-x-0 bottom-0 h-10",
                        style: {
                          background:
                            "linear-gradient(180deg, transparent, rgba(90,60,40,.28))",
                        },
                      }),
                ],
              }),
              v
                ? null
                : (0, t.jsxs)("button", {
                    type: "button",
                    className:
                      "relative z-10 mx-auto -mt-2 block cursor-pointer text-center disabled:cursor-default",
                    style: { width: "108%", marginLeft: "-4%" },
                    onClick: y,
                    disabled: "unrolling" === m,
                    "aria-label": u.letter.hint,
                    children: [
                      (0, t.jsx)("div", {
                        className: "relative h-9 overflow-hidden rounded-full",
                        style: {
                          background:
                            "linear-gradient(180deg, #f3e2c6 0%, #e8cfa6 30%, #caa06a 78%, #b18a55 100%)",
                          boxShadow:
                            "inset 0 2px 3px rgba(255,250,235,.8), inset 0 -3px 5px rgba(90,60,30,.35), 0 12px 22px -10px rgba(90,60,30,.55)",
                          animation:
                            "rolled" !== m || d
                              ? void 0
                              : "spTapHint 1.8s ease-in-out infinite",
                        },
                        children:
                          "unrolling" !== m || d
                            ? null
                            : (0, t.jsx)("span", {
                                "aria-hidden": !0,
                                className: "absolute inset-0",
                                style: {
                                  background:
                                    "repeating-linear-gradient(180deg, rgba(255,255,255,.22) 0 2px, rgba(140,100,60,.10) 2px 9px)",
                                  animation: "spRollSpin 380ms linear infinite",
                                  opacity: 0.55,
                                },
                              }),
                      }),
                      [0, 1].map((e) =>
                        (0, t.jsx)(
                          "span",
                          {
                            "aria-hidden": !0,
                            className: "absolute h-11 w-3 rounded-full",
                            style: {
                              top: -4,
                              left: 0 === e ? -2 : void 0,
                              right: 1 === e ? -2 : void 0,
                              background:
                                "linear-gradient(180deg, #8f684c, #6e4c33)",
                              boxShadow: "inset 0 1px 0 rgba(255,244,222,.35)",
                            },
                          },
                          e,
                        ),
                      ),
                      (0, t.jsx)("span", {
                        "aria-hidden": !0,
                        className:
                          "mt-3 block text-xs transition-opacity duration-300",
                        style: {
                          color: "var(--text-secondary)",
                          letterSpacing: "0.08em",
                          opacity: +("rolled" === m),
                        },
                        children: u.letter.hint,
                      }),
                    ],
                  }),
            ],
          }),
          v && i ? (0, t.jsx)(tx, { location: i }) : null,
          (0, t.jsx)("div", {
            className: "min-h-[3rem]",
            children: v
              ? (0, t.jsx)(eG, {
                  variant: "primary",
                  delay: 0.5,
                  reduced: d,
                  onClick: c,
                  children: u.letter.next,
                })
              : null,
          }),
        ],
      });
    }
    function tv(e) {
      let t = e;
      return () => {
        t |= 0;
        let e = Math.imul((t = (t + 0x6d2b79f5) | 0) ^ (t >>> 15), 1 | t);
        return (
          (((e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e) ^ (e >>> 14)) >>>
            0) /
          0x100000000
        );
      };
    }
    let tw = new Set(["unlock", "dark", "wish", "bloom"]),
      tk = new Set([
        "surprise",
        "voice",
        "letter",
        "bloom",
        "keepsake",
        "share",
      ]),
      tj = new Set(["cake", "wish"]),
      tz = new Set(["surprise", "voice", "cake", "share"]),
      tN = new Set(["unlock", "dark"]),
      tC = [
        {
          count: 6,
          size: [14, 26],
          blur: 2.6,
          opacity: [0.22, 0.4],
          duration: [17, 23],
          pool: ["bokeh", "bokeh", "bokeh", "star"],
        },
        {
          count: 4,
          size: [30, 44],
          blur: 0.4,
          opacity: [0.5, 0.72],
          duration: [12, 17],
          pool: ["petal", "petal", "star", "heart"],
        },
        {
          count: 3,
          size: [48, 70],
          blur: 0,
          opacity: [0.8, 1],
          duration: [9, 13],
          pool: ["petal", "heart", "star"],
        },
      ],
      tS = [
        {
          color: "var(--glow-violet)",
          size: "52vmax",
          left: "-14%",
          top: "-18%",
          delay: "0s",
        },
        {
          color: "var(--glow-rose)",
          size: "34vmax",
          left: "62%",
          top: "48%",
          delay: "-7s",
        },
        {
          color: "var(--glow-warm)",
          size: "26vmax",
          left: "20%",
          top: "64%",
          delay: "-14s",
        },
      ],
      t$ = [
        {
          left: "-4%",
          top: "10%",
          width: 96,
          flip: !1,
          rotate: -6,
          depthOpacity: 1,
          depthBlur: 0,
          bobDelay: 0,
          bobDuration: 5.4,
        },
        {
          left: "11%",
          top: "3%",
          width: 54,
          flip: !0,
          rotate: 9,
          depthOpacity: 0.68,
          depthBlur: 1.5,
          bobDelay: 1.1,
          bobDuration: 6.6,
        },
        {
          left: "85%",
          top: "78%",
          width: 90,
          flip: !0,
          rotate: 5,
          depthOpacity: 1,
          depthBlur: 0,
          bobDelay: 1.6,
          bobDuration: 5,
        },
        {
          left: "76%",
          top: "88%",
          width: 56,
          flip: !1,
          rotate: -8,
          depthOpacity: 0.66,
          depthBlur: 1.5,
          bobDelay: 2.4,
          bobDuration: 6.8,
        },
        {
          left: "91%",
          top: "7%",
          width: 72,
          flip: !0,
          rotate: 6,
          depthOpacity: 0.88,
          depthBlur: 0.5,
          bobDelay: 0.6,
          bobDuration: 6,
        },
        {
          left: "1%",
          top: "82%",
          width: 60,
          flip: !1,
          rotate: -5,
          depthOpacity: 0.8,
          depthBlur: 0.9,
          bobDelay: 2,
          bobDuration: 6.3,
        },
      ];
    function tM({ size: e }) {
      return (0, t.jsx)("svg", {
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        "aria-hidden": !0,
        style: {
          display: "block",
          filter: "drop-shadow(0 0 5px currentColor)",
        },
        children: (0, t.jsx)("path", {
          d: "M12 0 C13 7 17 11 24 12 C17 13 13 17 12 24 C11 17 7 13 0 12 C7 11 11 7 12 0 Z",
          fill: "currentColor",
        }),
      });
    }
    function tT({ stage: e, reduced: r }) {
      let n = !tw.has(e),
        s = tz.has(e),
        o = tN.has(e),
        i = tj.has(e),
        l = "surprise" === e ? "0.55s" : "1.2s",
        c = (0, a.useMemo)(
          () =>
            (function () {
              let e = tv(17),
                t = [];
              for (let a of tC)
                for (let r = 0; r < a.count; r++) {
                  let n = a.pool[r % a.pool.length];
                  t.push({
                    visual: (function (e, t) {
                      switch (e) {
                        case "petal":
                          return {
                            kind: "image",
                            src: e4[Math.floor(t() * e4.length)],
                          };
                        case "heart":
                          return {
                            kind: "image",
                            src: "/birthday/images/birthday/proposal-certificate/particles/heart-petal-confetti-01.webp",
                          };
                        case "star":
                          return { kind: "star", tone: "var(--accent-strong)" };
                        case "bokeh":
                          return {
                            kind: "bokeh",
                            tone:
                              0.72 > t()
                                ? "rgba(233, 205, 145, 0.9)"
                                : "rgba(233, 168, 175, 0.82)",
                          };
                      }
                    })(n, e),
                    left: 100 * e(),
                    scatterTop: 6 + 82 * e(),
                    size: a.size[0] + e() * (a.size[1] - a.size[0]),
                    blur: a.blur,
                    opacity: a.opacity[0] + e() * (a.opacity[1] - a.opacity[0]),
                    duration:
                      a.duration[0] + e() * (a.duration[1] - a.duration[0]),
                    delay: 14 * e(),
                  });
                }
              return t;
            })(),
          [],
        ),
        d = (0, a.useMemo)(() => {
          let e;
          return (
            (e = tv(41)),
            Array.from({ length: 8 }, () => ({
              left: 6 + 88 * e(),
              top: 8 + 78 * e(),
              size: 3 + 3 * e(),
              duration: 1.8 + 2.2 * e(),
              delay: 3 * e(),
            }))
          );
        }, []),
        u = (0, a.useMemo)(() => {
          let e;
          return (
            (e = tv(73)),
            Array.from({ length: 14 }, () => ({
              left: 100 * e(),
              top: 55 + 45 * e(),
              drift: -22 + 44 * e(),
              duration: 5 + 5 * e(),
              delay: 7 * e(),
              scale: 0.7 + 1.1 * e(),
            }))
          );
        }, []),
        m = (0, a.useMemo)(
          () => t$.map((e, t) => ({ ...e, src: e6[t % e6.length] })),
          [],
        );
      return (0, t.jsxs)(t.Fragment, {
        children: [
          (0, t.jsx)("div", {
            "aria-hidden": !0,
            className: "pointer-events-none absolute inset-0",
            style: {
              background: "var(--room-lit)",
              opacity: +!!tk.has(e),
              transitionProperty: "opacity",
              transitionDuration: "260ms",
              transitionTimingFunction: "var(--ease-soft)",
            },
          }),
          (0, t.jsx)("div", {
            "aria-hidden": !0,
            className: "pointer-events-none absolute inset-0",
            style: {
              background: "var(--room-vintage)",
              opacity: +!!i,
              transitionProperty: "opacity",
              transitionDuration: "260ms",
              transitionTimingFunction: "var(--ease-soft)",
            },
          }),
          (0, t.jsx)("div", {
            "aria-hidden": !0,
            className: "pointer-events-none absolute inset-0 overflow-hidden",
            style: {
              opacity: o ? 0.18 : i ? 0.32 : 1,
              transition: "opacity 1.2s var(--ease-soft)",
            },
            children: tS.map((e, a) =>
              (0, t.jsx)(
                "div",
                {
                  className: r ? "absolute rounded-full" : "mv-blob",
                  style: {
                    width: e.size,
                    height: e.size,
                    left: e.left,
                    top: e.top,
                    background: e.color,
                    animationDelay: e.delay,
                    ...(r ? { filter: "blur(60px)", opacity: 0.35 } : void 0),
                  },
                },
                a,
              ),
            ),
          }),
          !r &&
            (0, t.jsx)("div", {
              "aria-hidden": !0,
              className: "pointer-events-none absolute inset-0 overflow-hidden",
              style: {
                opacity: o ? 0.25 : 1,
                transition: "opacity 1.2s var(--ease-soft)",
              },
              children: u.map((e, a) =>
                (0, t.jsx)(
                  "span",
                  {
                    className: "mv-dust",
                    style: {
                      left: `${e.left}%`,
                      top: `${e.top}%`,
                      transform: `scale(${e.scale})`,
                      animationDuration: `${e.duration}s`,
                      animationDelay: `${e.delay}s`,
                      "--dust-drift": `${e.drift}px`,
                    },
                  },
                  a,
                ),
              ),
            }),
          (0, t.jsxs)("div", {
            "aria-hidden": !0,
            className: "pointer-events-none absolute inset-0",
            style: {
              opacity: +!!n,
              transitionProperty: "opacity",
              transitionDuration: l,
              transitionTimingFunction: "var(--ease-soft)",
            },
            children: [
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none absolute inset-0",
                style: {
                  opacity: "calc(1 - var(--sp-blow, 0) * .5)",
                  background:
                    "radial-gradient(ellipse 82% 62% at 50% 38%, rgba(231,201,137,.13) 0%, rgba(232,160,168,.07) 45%, transparent 72%)",
                },
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none absolute inset-0",
                style: { background: i ? "none" : "var(--room-vignette)" },
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                className:
                  "pointer-events-none absolute inset-0 overflow-hidden",
                children: c.map((e, a) => {
                  let n = {
                      left: `${e.left}%`,
                      top: r ? `${e.scatterTop}%` : 0,
                      opacity: e.opacity,
                      filter: e.blur ? `blur(${e.blur}px)` : void 0,
                      animationDuration: `${e.duration}s`,
                      animationDelay: `${e.delay}s`,
                    },
                    s = r ? "absolute" : "mv-confetti-fall absolute";
                  return "image" === e.visual.kind
                    ? (0, t.jsx)(
                        "img",
                        {
                          src: e.visual.src,
                          alt: "",
                          className: s,
                          style: { ...n, width: e.size },
                        },
                        a,
                      )
                    : "star" === e.visual.kind
                      ? (0, t.jsx)(
                          "span",
                          {
                            className: s,
                            style: { ...n, color: e.visual.tone },
                            children: (0, t.jsx)(tM, { size: e.size }),
                          },
                          a,
                        )
                      : (0, t.jsx)(
                          "span",
                          {
                            className: s,
                            style: {
                              ...n,
                              width: e.size,
                              height: e.size,
                              borderRadius: "50%",
                              background: `radial-gradient(circle, ${e.visual.tone} 0%, transparent 70%)`,
                            },
                          },
                          a,
                        );
                }),
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none absolute inset-0",
                children: d.map((e, a) =>
                  (0, t.jsx)(
                    "span",
                    {
                      className: "absolute rounded-full",
                      style: {
                        left: `${e.left}%`,
                        top: `${e.top}%`,
                        width: e.size,
                        height: e.size,
                        background: "var(--text-primary)",
                        opacity: r ? 0.6 : void 0,
                        animation: r
                          ? void 0
                          : `mvSparkle ${e.duration}s ${e.delay}s var(--ease-in-out) infinite`,
                      },
                    },
                    a,
                  ),
                ),
              }),
              (0, t.jsx)("div", {
                className:
                  "pointer-events-none absolute left-1/2 top-0 w-[130%] max-w-[560px] -translate-x-1/2",
                children: (0, t.jsx)("img", {
                  src: "/birthday/images/birthday/surprise-party/decor/garland-party-01.svg",
                  alt: "",
                  className: r ? "w-full" : "mv-garland w-full",
                }),
              }),
            ],
          }),
          (0, t.jsx)("div", {
            "aria-hidden": !0,
            className: "pointer-events-none absolute inset-0",
            style: {
              opacity: +!!s,
              transitionProperty: "opacity",
              transitionDuration: l,
              transitionTimingFunction: "var(--ease-soft)",
            },
            children: m.map((e, a) =>
              (0, t.jsx)(
                "div",
                {
                  className: "pointer-events-none absolute",
                  style: {
                    left: e.left,
                    top: e.top,
                    opacity: e.depthOpacity,
                    filter: e.depthBlur ? `blur(${e.depthBlur}px)` : void 0,
                  },
                  children: (0, t.jsx)("div", {
                    className: r ? void 0 : "mv-bob",
                    style: r
                      ? void 0
                      : {
                          animationDelay: `${e.bobDelay}s`,
                          animationDuration: `${e.bobDuration}s`,
                        },
                    children: (0, t.jsx)("img", {
                      src: e.src,
                      alt: "",
                      style: {
                        width: e.width,
                        transform: `rotate(${e.rotate}deg)${e.flip ? " scaleX(-1)" : ""}`,
                      },
                    }),
                  }),
                },
                a,
              ),
            ),
          }),
          (0, t.jsxs)("div", {
            "aria-hidden": !0,
            className: "pointer-events-none absolute inset-0",
            style: {
              opacity: +!!i,
              transitionProperty: "opacity",
              transitionDuration: "260ms",
              transitionTimingFunction: "var(--ease-soft)",
            },
            children: [
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none absolute inset-0",
                style: {
                  background: "var(--room-spot)",
                  opacity: "calc(1 - var(--sp-blow, 0) * .35)",
                },
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none absolute inset-0",
                style: { background: "var(--room-vignette)" },
              }),
            ],
          }),
        ],
      });
    }
    let tP = $("download", [
        ["path", { d: "M12 15V3", key: "m9g1x1" }],
        [
          "path",
          { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" },
        ],
        ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
      ]),
      tE = $("rotate-ccw", [
        [
          "path",
          {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3",
          },
        ],
        ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
      ]),
      tR = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    function tA() {
      return !("u" < typeof navigator) && tR.test(navigator.userAgent);
    }
    async function tD(e, t, a = "Ảnh Polaroid") {
      if (!e) return "error";
      let r = new File([e], t, { type: e.type || "image/png" });
      if (
        tA() &&
        "u" > typeof navigator &&
        "function" == typeof navigator.canShare &&
        navigator.canShare({ files: [r] })
      )
        try {
          return (await navigator.share({ files: [r], title: a }), "shared");
        } catch (e) {
          if (e instanceof Error && "AbortError" === e.name) return "cancelled";
        }
      let n = URL.createObjectURL(e),
        s = document.createElement("a");
      return (
        (s.href = n),
        (s.download = t),
        (s.style.display = "none"),
        document.body.appendChild(s),
        s.click(),
        setTimeout(() => {
          (document.body.removeChild(s), URL.revokeObjectURL(n));
        }, 100),
        "downloaded"
      );
    }
    function tF(e, t, a) {
      let r = [];
      for (let n of t.split(/\r?\n/)) {
        let t = n.split(/\s+/).filter(Boolean);
        if (0 === t.length) {
          r.push("");
          continue;
        }
        let s = "";
        for (let n of t.flatMap((t) => {
          if (e.measureText(t).width <= a) return [t];
          let r = [],
            n = "";
          for (let s of Array.from(t))
            (n && e.measureText(n + s).width > a && (r.push(n), (n = "")),
              (n += s));
          return (n && r.push(n), r);
        })) {
          let t = s ? `${s} ${n}` : n;
          e.measureText(t).width > a && s ? (r.push(s), (s = n)) : (s = t);
        }
        s && r.push(s);
      }
      return r;
    }
    async function tL(e) {
      var t, a;
      let r,
        s = document.createElement("canvas"),
        o = s.getContext("2d");
      if (!o) return null;
      document.fonts?.ready && (await document.fonts.ready);
      let i =
          ((t = "Georgia, serif"),
          (r = getComputedStyle(document.documentElement)
            .getPropertyValue("--font-brand")
            .trim())
            ? `${r}, ${t}`
            : t),
        l = e.wish.trim();
      o.font = `400 44px ${i}`;
      let c = l ? tF(o, l, 848) : [],
        d = l ? 120 + 62 * c.length + 44 : 0,
        u = 44 * !!l,
        m = n(e.copy.keepsake.footerDefault, { sender: e.senderName });
      o.font = `400 36px ${i}`;
      let p = tF(o, m, 856),
        h = e.dateLabel ? 1284 : 1222,
        f = h + u,
        g = l ? f + d + u : h,
        b = g + 50 * p.length + 16;
      ((s.width = 1080), (s.height = b));
      let x = o.createLinearGradient(0, 0, 0, s.height);
      (x.addColorStop(0, "#f8f3ea"),
        x.addColorStop(1, "#eadfcd"),
        (o.fillStyle = x),
        o.fillRect(0, 0, 1080, s.height));
      let y = e.photo
        ? await ((a = e.photo.src),
          new Promise((e) => {
            let t = new Image();
            ((t.crossOrigin = "anonymous"),
              (t.onload = () => e(t)),
              (t.onerror = () => e(null)),
              (t.src = a));
          }))
        : null;
      if (y) {
        const photoScale = Math.max(936 / y.width, 880 / y.height),
          photoWidth = y.width * photoScale,
          photoHeight = y.height * photoScale,
          photoPositionY = e.photo.positionY ?? 0.5;
        (o.save(),
          o.beginPath(),
          o.rect(72, 72, 936, 880),
          o.clip(),
          o.drawImage(
            y,
            72 + (936 - photoWidth) / 2,
            72 + (880 - photoHeight) * photoPositionY,
            photoWidth,
            photoHeight,
          ),
          o.restore());
      } else {
        let t = o.createLinearGradient(72, 72, 72, 952);
        (t.addColorStop(0, "#221b30"),
          t.addColorStop(1, "#0b0a14"),
          (o.fillStyle = t),
          o.fillRect(72, 72, 936, 880),
          e.age &&
            ((o.fillStyle = "#e7c989"),
            (o.font = `600 320px ${i}`),
            (o.textAlign = "center"),
            (o.textBaseline = "middle"),
            o.fillText(e.age, 540, 512)));
      }
      ((o.textAlign = "center"),
        (o.textBaseline = "alphabetic"),
        (o.fillStyle = "#3b2f2a"),
        (o.font = `400 130px ${i}`),
        o.fillText(e.recipientName, 540, 1102));
      let v = o.createLinearGradient(72, 0, 1008, 0);
      if (
        (v.addColorStop(0, "rgba(196,163,95,0)"),
        v.addColorStop(0.5, "rgba(196,163,95,0.85)"),
        v.addColorStop(1, "rgba(196,163,95,0)"),
        (o.fillStyle = v),
        o.fillRect(192, 1152, 696, 2),
        (o.fillStyle = "#6d5b50"),
        (o.font = `400 40px ${i}`),
        e.dateLabel && o.fillText(e.dateLabel, 540, 1222),
        l)
      ) {
        let t = o.createLinearGradient(72, f, 1008, f + d);
        (t.addColorStop(0, "#2a2238"),
          t.addColorStop(1, "#1e1829"),
          (o.fillStyle = t),
          o.beginPath(),
          o.moveTo(98, f),
          o.arcTo(1008, f, 1008, f + d, 26),
          o.arcTo(1008, f + d, 72, f + d, 26),
          o.arcTo(72, f + d, 72, f, 26),
          o.arcTo(72, f, 1008, f, 26),
          o.closePath(),
          o.fill(),
          (o.fillStyle = "#f2dfb0"),
          (o.font = `400 40px ${i}`),
          o.fillText(e.copy.keepsake.wishHeader, 540, f + 44 + 34, 848),
          (o.fillStyle = "#f5efe6"),
          (o.font = `400 44px ${i}`));
        let a = f + 44 + 46 + 30 + 44;
        for (let e of c) (o.fillText(e, 540, a), (a += 62));
      }
      return (
        (o.fillStyle = "#6d5b50"),
        (o.font = `400 36px ${i}`),
        !(function (e, t, a, r) {
          let n = a;
          for (let a of tF(e, t, r)) (e.fillText(a, 540, n), (n += 50));
        })(o, m, g, 856),
        new Promise((e) => s.toBlob(e, "image/png"))
      );
    }
    function tW({
      recipientName: e,
      senderName: r,
      age: n,
      birthdayDate: s,
      photo: o,
      wish: i,
      onRestart: c,
      reduced: d,
    }) {
      let u = l(),
        [m, p] = (0, a.useState)(!1),
        [h, f] = (0, a.useState)(null),
        g = v(),
        b = (0, a.useMemo)(() => k(s, g), [s, g]),
        x = (0, a.useCallback)(async () => {
          (p(!0), f(null));
          try {
            let t = await tL({
              recipientName: e,
              senderName: r,
              age: n,
              dateLabel: b,
              copy: u,
              photo: o,
              wish: i,
            });
            if (!t) throw Error("canvas produced no blob");
            let a = `polaroid-${e.toLowerCase().replace(/\s+/g, "-")}.png`,
              s = await tD(t, a, u.keepsake.shareTitle);
            "error" === s
              ? f("downloadFailed")
              : "downloaded" === s && tA() && f("savedMobileHint");
          } catch {
            f("downloadFailed");
          } finally {
            p(!1);
          }
        }, [n, b, o, e, r, i, u]);
      return (0, t.jsxs)("div", {
        className:
          "relative flex min-h-[100dvh] w-full flex-col items-center justify-center px-6 pb-20 pt-40 text-center",
        children: [
          (0, t.jsx)("p", {
            className: "mv-kicker mv-fade-in",
            children: u.share.eyebrow,
          }),
          (0, t.jsx)("h2", {
            className: "mv-display mv-fade-up mt-6 max-w-2xl",
            style: {
              fontSize: "clamp(1.75rem, 6vw, 3.25rem)",
              animationDelay: "0.1s",
            },
            children: u.share.title,
          }),
          (0, t.jsx)("p", {
            className: "mv-fade-up mt-6 leading-[1.15]",
            style: {
              fontFamily: e2,
              fontSize: "clamp(2.25rem, 9vw, 3.5rem)",
              color: eV,
              animationDelay: "0.2s",
              paddingBottom: "0.1em",
            },
            children: e,
          }),
          (0, t.jsx)("div", {
            className: "mv-fade-up mt-10 flex flex-col items-center gap-3",
            style: { animationDelay: "0.4s" },
            children: (0, t.jsxs)(eG, {
              onClick: x,
              disabled: m,
              reduced: d,
              children: [
                (0, t.jsx)(tP, { size: 17, "aria-hidden": !0 }),
                m ? u.share.downloading : u.share.download,
              ],
            }),
          }),
          (0, t.jsx)("p", {
            "aria-live": "polite",
            className: "mt-5 min-h-5 text-[0.8125rem]",
            style: { color: "var(--text-secondary)" },
            children: h
              ? "downloadFailed" === h
                ? u.share.downloadFailed
                : u.share.savedMobileHint
              : null,
          }),
          (0, t.jsx)("hr", { className: "mv-rule mt-12 w-full max-w-xs" }),
          (0, t.jsx)("p", {
            className: "mv-fade-up mt-10 max-w-sm",
            style: {
              fontFamily: e2,
              fontStyle: "italic",
              fontSize: "clamp(1rem, 3.2vw, 1.25rem)",
              color: "var(--text-secondary)",
              animationDelay: "0.5s",
            },
            children: u.share.outro,
          }),
          (0, t.jsxs)("button", {
            type: "button",
            onClick: c,
            className: "mv-btn mv-btn-ghost mt-10",
            children: [
              (0, t.jsx)(tE, { size: 15, "aria-hidden": !0 }),
              u.share.restart,
            ],
          }),
        ],
      });
    }
    function tB({ recipientName: e, age: a, showNext: r, onNext: s }) {
      let o = l();
      return (0, t.jsxs)("div", {
        className:
          "relative flex min-h-[100dvh] w-full flex-col items-center justify-center px-6 py-16 text-center",
        children: [
          (0, t.jsx)("p", {
            className: "mv-kicker mv-fade-in",
            children: o.surprise.eyebrow,
          }),
          (0, t.jsx)("h1", {
            className: "mv-display mv-fade-up mt-7 max-w-4xl",
            style: {
              fontSize: "clamp(2.25rem, 8.5vw, 4.75rem)",
              animationDelay: "0.1s",
            },
            children: o.surprise.title,
          }),
          (0, t.jsx)("p", {
            className: "mv-name-glow mv-fade-up mt-6 leading-[1.1]",
            style: {
              fontFamily: e2,
              fontSize: "clamp(3rem, 13vw, 6rem)",
              color: eV,
              animationDelay: "0.28s",
              paddingBottom: "0.12em",
            },
            children: e,
          }),
          a
            ? (0, t.jsxs)("div", {
                className: "mv-fade-up mt-7 flex items-center gap-4",
                style: { animationDelay: "0.44s" },
                children: [
                  (0, t.jsx)("span", {
                    className: "h-px w-10 sm:w-16",
                    style: { background: "var(--border-accent)" },
                  }),
                  (0, t.jsx)("span", {
                    style: {
                      fontFamily: e2,
                      fontSize: "clamp(1.05rem, 3.4vw, 1.35rem)",
                      fontStyle: "italic",
                      color: eX,
                    },
                    children: n(o.surprise.ageLine, { age: a }),
                  }),
                  (0, t.jsx)("span", {
                    className: "h-px w-10 sm:w-16",
                    style: { background: "var(--border-accent)" },
                  }),
                ],
              })
            : null,
          (0, t.jsx)("p", {
            className: "mv-body mv-fade-up mt-6 max-w-sm text-base",
            style: { animationDelay: "0.58s" },
            children: o.surprise.subtitle,
          }),
          (0, t.jsx)("div", {
            className: "mt-14 min-h-12",
            children: r
              ? (0, t.jsx)(eG, {
                  onClick: s,
                  className: "mv-fade-in",
                  children: o.surprise.next,
                })
              : null,
          }),
        ],
      });
    }
    function tI({ value: e, label: a }) {
      return (0, t.jsxs)("div", {
        className: "flex min-w-16 flex-col items-center gap-1.5 sm:min-w-20",
        children: [
          (0, t.jsx)("span", {
            style: {
              fontFamily: e2,
              fontSize: "clamp(2rem, 8vw, 3.25rem)",
              fontVariantNumeric: "tabular-nums",
              lineHeight: 1,
              color: eV,
            },
            children: String(e).padStart(2, "0"),
          }),
          (0, t.jsx)("span", {
            className: "uppercase",
            style: {
              fontSize: "0.6875rem",
              letterSpacing: "0.22em",
              color: "var(--text-muted)",
            },
            children: a,
          }),
        ],
      });
    }
    function tH({
      mode: e,
      birthdayDate: r,
      recipientName: n,
      onUnlock: s,
      reduced: o,
    }) {
      let i = l(),
        c = (0, a.useId)(),
        d = (0, a.useId)(),
        [u, m] = (0, a.useState)(""),
        [p, h] = (0, a.useState)(null),
        [f, g] = (0, a.useState)(null),
        b = (0, a.useMemo)(
          () =>
            r
              ? (function (e, t) {
                  let a = e.split("-").map(Number);
                  if (3 !== a.length || a.some(Number.isNaN)) return null;
                  let [, r, n] = a,
                    s = new Date(t.getFullYear(), r - 1, n, 0, 0, 0, 0);
                  return s.getTime() > t.getTime()
                    ? s
                    : new Date(t.getFullYear() + 1, r - 1, n, 0, 0, 0, 0);
                })(r, new Date())
              : null,
          [r],
        );
      (0, a.useEffect)(() => {
        if ("countdown" !== e || !b) return;
        let t = () =>
          g(
            (function (e, t) {
              let a = e.getTime() - t.getTime();
              if (a <= 0)
                return { days: 0, hours: 0, minutes: 0, seconds: 0, done: !0 };
              let r = Math.floor(a / 1e3);
              return {
                days: Math.floor(r / 86400),
                hours: Math.floor((r % 86400) / 3600),
                minutes: Math.floor((r % 3600) / 60),
                seconds: r % 60,
                done: !1,
              };
            })(b, new Date()),
          );
        t();
        let a = setInterval(t, 1e3);
        return () => clearInterval(a);
      }, [e, b]);
      let x = f?.done ?? !1;
      return (0, t.jsxs)("div", {
        className:
          "relative flex min-h-[100dvh] w-full flex-col items-center justify-center px-6 py-16 text-center",
        children: [
          (0, t.jsx)("p", {
            className: "mv-kicker mv-fade-in",
            children: i.unlock.eyebrow,
          }),
          (0, t.jsx)("p", {
            className: "mv-fade-up mt-5 leading-[1.15]",
            style: {
              fontFamily: e2,
              fontSize: "clamp(2.5rem, 11vw, 4.5rem)",
              color: eV,
              animationDelay: "0.1s",
              paddingBottom: "0.1em",
            },
            children: n,
          }),
          (0, t.jsx)("div", {
            className:
              "mv-glass mv-fade-up mt-9 w-full max-w-lg px-6 py-8 sm:px-10",
            style: { animationDelay: "0.24s" },
            children:
              "countdown" === e
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("p", {
                        className: "mv-body text-[0.95rem]",
                        children: x ? i.unlock.ready : i.unlock.countdownLead,
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "mt-6 flex items-start justify-center gap-3 sm:gap-6",
                        style: { minHeight: "5.5rem" },
                        "aria-live": "polite",
                        children:
                          f && !x
                            ? (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)(tI, {
                                    value: f.days,
                                    label: i.unlock.days,
                                  }),
                                  (0, t.jsx)(tI, {
                                    value: f.hours,
                                    label: i.unlock.hours,
                                  }),
                                  (0, t.jsx)(tI, {
                                    value: f.minutes,
                                    label: i.unlock.minutes,
                                  }),
                                  (0, t.jsx)(tI, {
                                    value: f.seconds,
                                    label: i.unlock.seconds,
                                  }),
                                ],
                              })
                            : null,
                      }),
                      !x && f
                        ? (0, t.jsx)("p", {
                            className: "mv-body mt-1 text-[0.95rem]",
                            children: i.unlock.countdownTail,
                          })
                        : null,
                      (0, t.jsx)("div", {
                        className: "mt-7",
                        children: (0, t.jsx)(eG, {
                          onClick: s,
                          disabled: !x,
                          reduced: o,
                          children: i.unlock.open,
                        }),
                      }),
                    ],
                  })
                : (0, t.jsxs)("form", {
                    onSubmit: (e) => {
                      if ((e.preventDefault(), !u)) return void h("dateEmpty");
                      if (u === r) {
                        (h(null), s());
                        return;
                      }
                      h("dateWrong");
                    },
                    noValidate: !0,
                    children: [
                      (0, t.jsx)("p", {
                        className: "mv-body text-[0.95rem]",
                        children: i.unlock.dateLead,
                      }),
                      (0, t.jsx)("p", {
                        className: "mv-body mt-1 text-[0.95rem]",
                        children: i.unlock.dateHint,
                      }),
                      (0, t.jsx)("label", {
                        htmlFor: c,
                        className: "mt-7 block text-left text-[0.8125rem]",
                        style: { color: "var(--text-secondary)" },
                        children: i.unlock.dateLabel,
                      }),
                      (0, t.jsx)("input", {
                        id: c,
                        type: "date",
                        value: u,
                        onChange: (e) => {
                          (m(e.target.value), h(null));
                        },
                        "aria-invalid": !!p || void 0,
                        "aria-describedby": p ? d : void 0,
                        className: "mt-2 w-full rounded-xl px-4 py-3 text-base",
                        style: {
                          minHeight: 48,
                          background: "var(--surface-glass-strong)",
                          border: `1px solid ${p ? e0 : "var(--border-hairline-strong)"}`,
                          color: "var(--text-primary)",
                          colorScheme: "dark",
                        },
                      }),
                      p
                        ? (0, t.jsx)("p", {
                            id: d,
                            role: "alert",
                            className: "mt-2 text-left text-[0.8125rem]",
                            style: { color: e0 },
                            children:
                              "dateEmpty" === p
                                ? i.unlock.dateEmpty
                                : i.unlock.dateWrong,
                          })
                        : null,
                      (0, t.jsx)("div", {
                        className: "mt-7",
                        children: (0, t.jsx)(eG, {
                          type: "submit",
                          reduced: o,
                          children: i.unlock.dateSubmit,
                        }),
                      }),
                    ],
                  }),
          }),
        ],
      });
    }
    let tG = [
      { l: "18%", t: "36%", s: 2.5, o: 0.5 },
      { l: "72%", t: "22%", s: 2, o: 0.4 },
      { l: "80%", t: "62%", s: 2.5, o: 0.45 },
      { l: "34%", t: "78%", s: 2, o: 0.4 },
      { l: "56%", t: "12%", s: 1.8, o: 0.35 },
    ];
    function tO({ audioUrl: e, onDone: r, reduced: n }) {
      let s = l(),
        o = "string" == typeof e && e.trim().length > 0,
        i = o && !n,
        [c, d] = (0, a.useState)("idle"),
        [u, m] = (0, a.useState)(!1),
        [p, h] = (0, a.useState)(0),
        [f, g] = (0, a.useState)(!1),
        b = (0, a.useRef)(null),
        x = (0, a.useRef)(null),
        y = (0, a.useRef)(!1),
        v = (0, a.useRef)(-10),
        w = (0, a.useRef)(!1),
        k = (0, a.useRef)({ x: 0, y: 0 }),
        j = (0, a.useRef)(null),
        z = (0, a.useCallback)((e, t) => {
          let a = x.current;
          a &&
            ((a.style.transition = t
              ? "transform 560ms cubic-bezier(.3,1.35,.4,1)"
              : "none"),
            (a.style.transform = `rotate(${e}deg)`),
            (v.current = e));
        }, []);
      (0, a.useEffect)(() => {
        let e = x.current;
        e && !e.style.transform && (e.style.transform = "rotate(-10deg)");
      }, []);
      let N = (0, a.useCallback)(() => {
          (d("done"),
            g(!0),
            j.current && clearTimeout(j.current),
            (j.current = setTimeout(() => g(!1), 1300)));
        }, []),
        C = (0, a.useCallback)(() => {
          (z(72, !0), (w.current = !0), m(!0));
          let e = b.current;
          e && e.play().catch(() => {});
        }, [z]),
        S = (0, a.useCallback)(() => {
          let e = w.current;
          (z(-10, !0), (w.current = !1), m(!1), b.current?.pause(), e && N());
        }, [N, z]);
      ((0, a.useEffect)(() => {
        if (!o || !e) return;
        let t = new Audio(e);
        ((t.preload = "auto"), (b.current = t));
        let a = () => {
            (d("playing"), window.dispatchEvent(new Event("sp-voice-play")));
          },
          r = () => {
            (d((e) => ("done" === e ? e : "idle")),
              window.dispatchEvent(new Event("sp-voice-stop")));
          },
          n = () => {
            ((w.current = !1),
              m(!1),
              z(-10, !0),
              N(),
              window.dispatchEvent(new Event("sp-voice-stop")));
          },
          s = () => {
            let e = t.duration > 0 ? t.currentTime / t.duration : 0;
            (h(e), w.current && !y.current && z(72 + 6 * e, !1));
          };
        return (
          t.addEventListener("play", a),
          t.addEventListener("pause", r),
          t.addEventListener("ended", n),
          t.addEventListener("error", r),
          t.addEventListener("timeupdate", s),
          () => {
            (t.pause(),
              window.dispatchEvent(new Event("sp-voice-stop")),
              t.removeEventListener("play", a),
              t.removeEventListener("pause", r),
              t.removeEventListener("ended", n),
              t.removeEventListener("error", r),
              t.removeEventListener("timeupdate", s),
              (t.src = ""),
              t.load(),
              (b.current = null));
          }
        );
      }, [e, o, N, z]),
        (0, a.useEffect)(
          () => () => {
            j.current && clearTimeout(j.current);
          },
          [],
        ));
      let $ = (0, a.useCallback)((e) => {
          y.current = !0;
          let t = x.current?.parentElement?.getBoundingClientRect();
          t &&
            (k.current = { x: t.left + t.width / 2, y: t.top + t.height / 2 });
          try {
            e.currentTarget.setPointerCapture(e.pointerId);
          } catch {}
          w.current && (b.current?.pause(), (w.current = !1), m(!1));
        }, []),
        M = (0, a.useCallback)(
          (e) => {
            if (!y.current) return;
            let { x: t, y: a } = k.current;
            z(
              Math.max(
                -10,
                Math.min(
                  80,
                  -(180 * Math.atan2(e.clientX - t, e.clientY - a)) / Math.PI,
                ),
              ),
              !1,
            );
          },
          [z],
        ),
        T = (0, a.useCallback)(() => {
          y.current && ((y.current = !1), v.current > 34 ? C() : S());
        }, [C, S]),
        P = (0, a.useCallback)(() => {
          o &&
            n &&
            "idle" === c &&
            ((w.current = !0), m(!0), b.current?.play().catch(() => {}));
        }, [o, n, c]),
        E = n
          ? "none"
          : "playing" === c
            ? "spSpin 1.8s linear infinite"
            : f
              ? "spSpinDown 1.25s cubic-bezier(.2,.7,.4,1) forwards"
              : "none",
        R = o
          ? "playing" === c
            ? s.voice.playing
            : "done" === c
              ? void 0
              : n
                ? s.voice.hintReduced
                : s.voice.hint
          : void 0,
        A = Math.min(7, Math.round(7 * p));
      return (0, t.jsxs)("div", {
        className:
          "relative flex min-h-[100dvh] w-full flex-col items-center justify-center gap-6 px-6 py-16 text-center",
        children: [
          (0, t.jsx)("style", {
            children: `
        @keyframes spSpin { from{transform:rotate(0)} to{transform:rotate(360deg)} }
        @keyframes spSpinDown { from{transform:rotate(0)} to{transform:rotate(150deg)} }
      `,
          }),
          (0, t.jsx)("p", {
            className: "max-w-sm",
            style: {
              fontFamily: e2,
              fontStyle: "italic",
              fontSize: "clamp(17px, 4.6vw, 22px)",
              color: e1,
            },
            children: s.voice.line,
          }),
          (0, t.jsxs)("div", {
            className: "relative rounded-[26px]",
            style: {
              "--sp-deck": "min(84vw, 330px)",
              width: "var(--sp-deck)",
              aspectRatio: "330 / 210",
              background:
                "linear-gradient(160deg, #b99274 0%, #a37c5e 52%, #8f684c 100%)",
              boxShadow:
                "inset 0 1.5px 0 rgba(255,244,222,.5), inset 0 -3px 8px rgba(60,32,18,.35), 0 26px 54px -26px rgba(60,32,18,.65)",
              cursor: o && n ? "pointer" : "default",
            },
            onClick: o && n ? P : void 0,
            children: [
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                className:
                  "pointer-events-none absolute inset-0 rounded-[26px] opacity-30",
                style: {
                  background:
                    "repeating-linear-gradient(94deg, rgba(255,235,210,.12) 0 3px, transparent 3px 11px, rgba(80,45,25,.12) 11px 13px, transparent 13px 22px)",
                },
              }),
              (0, t.jsxs)("div", {
                className: "absolute",
                style: {
                  left: "32%",
                  top: "50%",
                  width: "calc(var(--sp-deck) * 0.6)",
                  aspectRatio: "1",
                  transform: "translate(-50%, -50%)",
                },
                children: [
                  (0, t.jsx)("div", {
                    "aria-hidden": !0,
                    className: "absolute -inset-1.5 rounded-full",
                    style: {
                      background: `conic-gradient(from -90deg, ${eV} calc(${p} * 360deg), rgba(240,201,138,.16) 0)`,
                      WebkitMask:
                        "radial-gradient(circle, transparent 68%, #000 69%)",
                      mask: "radial-gradient(circle, transparent 68%, #000 69%)",
                    },
                  }),
                  (0, t.jsx)("div", {
                    "aria-hidden": !0,
                    className: "absolute inset-0 rounded-full",
                    style: { boxShadow: "0 10px 24px -10px rgba(40,20,10,.7)" },
                  }),
                  (0, t.jsxs)("div", {
                    className: "absolute inset-0 overflow-hidden rounded-full",
                    style: { background: "#241511", animation: E },
                    children: [
                      tG.map((e, a) =>
                        (0, t.jsx)(
                          "span",
                          {
                            "aria-hidden": !0,
                            className: "absolute rounded-full",
                            style: {
                              left: e.l,
                              top: e.t,
                              width: e.s,
                              height: e.s,
                              background: `rgba(246,234,216,${e.o})`,
                            },
                          },
                          a,
                        ),
                      ),
                      (0, t.jsx)("span", {
                        "aria-hidden": !0,
                        className:
                          "absolute left-1/2 top-1/2 h-px w-[46%] origin-left",
                        style: {
                          background:
                            "linear-gradient(90deg, transparent 30%, rgba(246,234,216,.1))",
                          transform: "rotate(28deg)",
                        },
                      }),
                      (0, t.jsx)("div", {
                        "aria-hidden": !0,
                        className:
                          "pointer-events-none absolute inset-0 rounded-full",
                        style: {
                          background:
                            "repeating-radial-gradient(circle at 50% 50%, transparent 0 2px, rgba(0,0,0,.28) 2px 3px, transparent 3px 4px)",
                          WebkitMask:
                            "radial-gradient(circle, transparent 21%, #000 23%)",
                          mask: "radial-gradient(circle, transparent 21%, #000 23%)",
                        },
                      }),
                      (0, t.jsx)("div", {
                        "aria-hidden": !0,
                        className:
                          "pointer-events-none absolute inset-0 rounded-full",
                        style: {
                          background:
                            "conic-gradient(from 40deg, transparent 0 10%, rgba(255,230,200,.16) 15% 21%, transparent 26% 56%, rgba(255,230,200,.1) 61% 66%, transparent 71%)",
                        },
                      }),
                      (0, t.jsx)("div", {
                        className: "absolute left-1/2 top-1/2 rounded-full",
                        style: {
                          width: "40%",
                          height: "40%",
                          transform: "translate(-50%, -50%)",
                          background:
                            "radial-gradient(circle at 36% 30%, #f6dfd0 0%, #edc0bd 55%, #dfa3a8 100%)",
                          border: `2px solid ${eX}`,
                          boxShadow: "inset 0 0 0 3px rgba(255,252,246,.35)",
                        },
                        children: [0, 90, 180, 270].map((e) =>
                          (0, t.jsx)(
                            "span",
                            {
                              "aria-hidden": !0,
                              className:
                                "absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full",
                              style: {
                                background: e % 180 == 0 ? e0 : eX,
                                transform: `rotate(${e + 45}deg) translateY(calc(var(--sp-deck) * -0.105))`,
                              },
                            },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, t.jsx)("span", {
                    "aria-hidden": !0,
                    className: "absolute left-1/2 top-1/2 rounded-full",
                    style: {
                      width: 7,
                      height: 7,
                      transform: "translate(-50%, -50%)",
                      background: "#2a1714",
                      border: "1px solid #caa06a",
                    },
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "absolute",
                style: {
                  left: "84%",
                  top: "26%",
                  width: "calc(var(--sp-deck) * 0.13)",
                  aspectRatio: "1",
                  transform: "translate(-50%, -50%)",
                },
                children: [
                  (0, t.jsx)("div", {
                    "aria-hidden": !0,
                    className: "absolute inset-0 rounded-full",
                    style: {
                      background:
                        "radial-gradient(circle at 36% 30%, #efe0cd, #c9ab84 70%, #a9885f)",
                      boxShadow:
                        "0 4px 10px -4px rgba(60,32,18,.6), inset 0 1px 0 rgba(255,255,255,.5)",
                    },
                  }),
                  (0, t.jsxs)("div", {
                    ref: x,
                    className: "absolute left-1/2 top-1/2",
                    style: { width: 0, height: 0, touchAction: "none" },
                    onPointerDown: i ? $ : void 0,
                    onPointerMove: i ? M : void 0,
                    onPointerUp: i ? T : void 0,
                    onPointerCancel: i ? T : void 0,
                    onLostPointerCapture: i ? T : void 0,
                    children: [
                      i
                        ? (0, t.jsx)("div", {
                            className:
                              "absolute cursor-grab active:cursor-grabbing",
                            style: {
                              left: -24,
                              top: -10,
                              width: 48,
                              height: "calc(var(--sp-deck) * 0.4)",
                            },
                            "aria-label": s.voice.armAria,
                            role: "slider",
                            "aria-valuemin": 0,
                            "aria-valuemax": 1,
                            "aria-valuenow": +!!u,
                          })
                        : null,
                      (0, t.jsx)("span", {
                        "aria-hidden": !0,
                        className: "pointer-events-none absolute rounded-full",
                        style: {
                          left: -7,
                          top: "calc(var(--sp-deck) * -0.055)",
                          width: 14,
                          height: "calc(var(--sp-deck) * 0.05)",
                          background:
                            "linear-gradient(180deg, #8f684c, #6e4c33)",
                        },
                      }),
                      (0, t.jsx)("span", {
                        "aria-hidden": !0,
                        className: "pointer-events-none absolute rounded-full",
                        style: {
                          left: -2.5,
                          top: 4,
                          width: 5,
                          height: "calc(var(--sp-deck) * 0.34)",
                          background:
                            "linear-gradient(180deg, #e8d3b4, #caa06a 70%, #b98d55)",
                          boxShadow: "0 2px 5px rgba(60,32,18,.4)",
                        },
                      }),
                      (0, t.jsx)("span", {
                        "aria-hidden": !0,
                        className: "pointer-events-none absolute",
                        style: {
                          left: -8,
                          top: "calc(var(--sp-deck) * 0.34)",
                          width: 16,
                          height: "calc(var(--sp-deck) * 0.058)",
                          borderRadius: 5,
                          background:
                            "linear-gradient(160deg, #f3e3c8, #caa06a)",
                          boxShadow: "0 3px 7px rgba(60,32,18,.45)",
                        },
                      }),
                      (0, t.jsx)("span", {
                        "aria-hidden": !0,
                        className: "pointer-events-none absolute",
                        style: {
                          left: -1,
                          top: "calc(var(--sp-deck) * 0.392)",
                          width: 2,
                          height: 6,
                          background: "#4a3527",
                        },
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                className:
                  "absolute inset-x-0 flex h-4 items-end justify-center gap-1",
                style: { bottom: "6%" },
                children: Array.from({ length: 7 }, (e, a) =>
                  (0, t.jsx)(
                    "span",
                    {
                      className: "w-1 rounded-full",
                      style: {
                        height: 3,
                        background: a < A ? eV : "rgba(255,244,222,.4)",
                        transition: "background 260ms ease",
                      },
                    },
                    a,
                  ),
                ),
              }),
            ],
          }),
          o && R
            ? (0, t.jsx)("p", {
                "aria-live": "polite",
                className: "text-xs",
                style: {
                  color: "rgba(246,234,216,.72)",
                  letterSpacing: "0.08em",
                },
                children: R,
              })
            : null,
          (0, t.jsx)(eG, { reduced: n, onClick: r, children: s.voice.done }),
        ],
      });
    }
    let tU = $("star", [
        [
          "path",
          {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s",
          },
        ],
      ]),
      tq = "var(--wish-spark)",
      t_ = "var(--wish-spark-alt)",
      tY = 2 * Math.PI * 44;
    function tZ(e) {
      let t = e;
      return () => {
        t |= 0;
        let e = Math.imul((t = (t + 0x6d2b79f5) | 0) ^ (t >>> 15), 1 | t);
        return (
          (((e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e) ^ (e >>> 14)) >>>
            0) /
          0x100000000
        );
      };
    }
    function tK({ onDone: e, reduced: r }) {
      let n = l(),
        s = (0, a.useMemo)(() => {
          let e;
          return (
            (e = tZ(20823)),
            Array.from({ length: 14 }, (t, a) => ({
              angle: Math.round(360 * e()),
              duration: 1.4 + e(),
              delay: 1.2 * e(),
              size: 9 + 4 * e(),
              color: a % 3 == 0 ? t_ : tq,
            }))
          );
        }, []),
        o = (0, a.useMemo)(() => {
          let e;
          return (
            (e = tZ(20824)),
            Array.from({ length: 14 }, (t, a) => {
              let r = (a / 14) * Math.PI * 2 + e(),
                n = 70 + 60 * e();
              return {
                x: Math.cos(r) * n,
                y: Math.sin(r) * n - 16,
                size: 3 + 4 * e(),
                duration: 0.9 + 0.5 * e(),
                color: a % 3 == 0 ? t_ : tq,
              };
            })
          );
        }, []),
        i = (0, a.useMemo)(() => {
          let e;
          return (
            (e = tZ(20825)),
            Array.from({ length: 10 }, () => ({
              left: 8 + 84 * e(),
              top: 10 + 70 * e(),
              duration: 2.4 + 2 * e(),
              delay: 2 * e(),
            }))
          );
        }, []),
        c = (0, a.useMemo)(() => {
          let e, t;
          return (
            (e = tZ(20826)),
            (t = ["★", "✦", "✧", "⭐"]),
            Array.from({ length: 30 }, (a, r) => ({
              left: 4 + 92 * e(),
              size: 12 + 20 * e(),
              duration: 2.8 + 2 * e(),
              delay: 2 * e(),
              drift: (e() - 0.5) * 120,
              spin: (e() - 0.5) * 120,
              glyph: t[Math.floor(e() * t.length)],
              color: r % 3 == 0 ? t_ : tq,
            }))
          );
        }, []),
        [d, u] = (0, a.useState)(!1),
        [m, p] = (0, a.useState)(!1),
        h = (0, a.useRef)(null),
        f = (0, a.useRef)(0),
        g = (0, a.useRef)(0),
        b = (0, a.useRef)(0),
        x = (0, a.useRef)(!1),
        y = (0, a.useRef)(!1),
        v = r ? 400 : 2800,
        w = (0, a.useCallback)((e) => {
          let t = h.current;
          t && (t.style.strokeDashoffset = (tY * (1 - e)).toFixed(2));
        }, []),
        k = (0, a.useCallback)(() => {
          if (f.current) return;
          let t = (a) => {
            let r = g.current ? Math.min(100, a - g.current) : 16;
            if (
              ((g.current = a),
              x.current && (b.current = Math.min(1, b.current + r / v)),
              w(b.current),
              b.current >= 1)
            ) {
              if (
                ((f.current = 0),
                (g.current = 0),
                (x.current = !1),
                u(!1),
                !y.current)
              ) {
                ((y.current = !0), p(!0));
                try {
                  navigator.vibrate?.([28, 40, 56]);
                } catch {}
                e();
              }
              return;
            }
            x.current
              ? (f.current = requestAnimationFrame(t))
              : ((f.current = 0), (g.current = 0));
          };
          f.current = requestAnimationFrame(t);
        }, [v, e, w]),
        j = (0, a.useCallback)(() => {
          y.current || ((x.current = !0), u(!0), k());
        }, [k]),
        z = (0, a.useCallback)(() => {
          x.current && ((x.current = !1), u(!1));
        }, []);
      (0, a.useEffect)(
        () => () => {
          f.current && cancelAnimationFrame(f.current);
        },
        [],
      );
      let N = (0, a.useCallback)(
          (e) => {
            (" " === e.key || "Enter" === e.key) && (e.preventDefault(), j());
          },
          [j],
        ),
        C = (0, a.useCallback)(
          (e) => {
            (" " === e.key || "Enter" === e.key) && z();
          },
          [z],
        ),
        S = d && !r && !m;
      return (0, t.jsxs)("div", {
        className:
          "relative flex min-h-[100dvh] w-full flex-col items-center justify-center gap-6 px-6 py-16 text-center",
        children: [
          (0, t.jsx)("style", {
            children: `
        @keyframes spWishIn { 0%{transform:rotate(var(--sp-wa,0deg)) translateX(110px) scale(.5);opacity:0} 20%{opacity:1} 100%{transform:rotate(calc(var(--sp-wa,0deg) + 130deg)) translateX(10px) scale(1.1);opacity:0} }
        @keyframes spWishGlow { 0%,100%{opacity:.35} 50%{opacity:.8} }
        @keyframes spHeartBeat { 0%,100%{transform:scale(1)} 12%{transform:scale(1.22)} 24%{transform:scale(1.02)} 36%{transform:scale(1.16)} 50%{transform:scale(1)} }
        @keyframes spWishBurst { from{transform:scale(.6);opacity:.9} to{transform:scale(var(--sp-burst,2.6));opacity:0} }
        @keyframes spWishSpark { from{transform:translate(0,0) scale(1);opacity:1} to{transform:translate(var(--sp-sx,0px),var(--sp-sy,0px)) scale(.4);opacity:0} }
        @keyframes spWishTwinkle { 0%,100%{opacity:.12;transform:scale(.7)} 50%{opacity:.75;transform:scale(1)} }
        @keyframes spWishRise { 0%{transform:translate(0,0) scale(.3) rotate(0deg);opacity:0} 12%{opacity:1} 78%{opacity:1} 100%{transform:translate(var(--sp-dx,0px),-96vh) scale(1) rotate(var(--sp-rot,0deg));opacity:0} }
      `,
          }),
          r
            ? null
            : i.map((e, a) =>
                (0, t.jsx)(
                  "span",
                  {
                    "aria-hidden": !0,
                    className:
                      "pointer-events-none absolute h-1.5 w-1.5 rounded-full",
                    style: {
                      left: `${e.left}%`,
                      top: `${e.top}%`,
                      background: tq,
                      animation: `spWishTwinkle ${e.duration}s ${e.delay}s ease-in-out infinite`,
                    },
                  },
                  `tw-${a}`,
                ),
              ),
          m && !r
            ? c.map((e, a) =>
                (0, t.jsx)(
                  "span",
                  {
                    "aria-hidden": !0,
                    className:
                      "pointer-events-none absolute bottom-[6%] leading-none",
                    style: {
                      left: `${e.left}%`,
                      fontSize: e.size,
                      color: e.color,
                      textShadow: `0 0 ${0.7 * e.size}px ${e.color}`,
                      "--sp-dx": `${e.drift.toFixed(0)}px`,
                      "--sp-rot": `${e.spin.toFixed(0)}deg`,
                      animation: `spWishRise ${e.duration}s ${e.delay}s cubic-bezier(.33,.7,.4,1) both`,
                    },
                    children: e.glyph,
                  },
                  `rise-${a}`,
                ),
              )
            : null,
          (0, t.jsxs)("div", {
            className: "relative w-full max-w-sm",
            style: { minHeight: "7em" },
            children: [
              (0, t.jsx)("p", {
                className: "absolute inset-x-0 top-0",
                style: {
                  fontFamily: e2,
                  fontStyle: "italic",
                  fontSize: "clamp(17px, 4.6vw, 22px)",
                  lineHeight: 1.4,
                  color: e1,
                  opacity: +!m,
                  transform: m ? "translateY(-8px)" : "none",
                  transition: r
                    ? "none"
                    : "opacity 800ms ease, transform 800ms ease",
                },
                children: n.wish.line,
              }),
              (0, t.jsx)("p", {
                "aria-live": "polite",
                className: "absolute inset-x-0 top-0",
                style: {
                  fontFamily: e2,
                  fontStyle: "italic",
                  fontSize: "clamp(17px, 4.6vw, 22px)",
                  lineHeight: 1.5,
                  color: "var(--wish-done-text)",
                  textShadow: "var(--wish-done-glow)",
                  opacity: +!!m,
                  transform: m ? "scale(1)" : "scale(0.94)",
                  transition: r
                    ? "none"
                    : "opacity 1200ms ease, transform 1200ms ease",
                },
                children: m ? n.wish.done : "",
              }),
            ],
          }),
          (0, t.jsxs)("div", {
            className: "relative flex flex-col items-center gap-8",
            style: {
              opacity: m ? 0.6 : 1,
              pointerEvents: m ? "none" : "auto",
              transition: r ? "none" : "opacity 1000ms ease",
            },
            children: [
              (0, t.jsxs)("div", {
                className: "relative flex items-center justify-center",
                children: [
                  S
                    ? s.map((e, a) =>
                        (0, t.jsx)(
                          "span",
                          {
                            "aria-hidden": !0,
                            className:
                              "pointer-events-none absolute left-1/2 top-1/2 leading-none",
                            style: {
                              marginLeft: -e.size / 2,
                              marginTop: -e.size / 2,
                              fontSize: e.size,
                              color: e.color,
                              "--sp-wa": `${e.angle}deg`,
                              animation: `spWishIn ${e.duration}s ${e.delay}s ease-in infinite`,
                            },
                            children: "♥",
                          },
                          `heart-${a}`,
                        ),
                      )
                    : null,
                  (0, t.jsx)("span", {
                    "aria-hidden": !0,
                    className:
                      "pointer-events-none absolute h-48 w-48 rounded-full",
                    style: {
                      background: "var(--wish-glow)",
                      opacity: d || m ? 1 : 0.35,
                      transition: "opacity 600ms ease",
                      animation: S
                        ? "spWishGlow 1.6s ease-in-out infinite"
                        : "none",
                    },
                  }),
                  m && !r
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          [0, 1].map((e) =>
                            (0, t.jsx)(
                              "span",
                              {
                                "aria-hidden": !0,
                                className:
                                  "pointer-events-none absolute h-28 w-28 rounded-full",
                                style: {
                                  border: `2px solid ${tq}`,
                                  "--sp-burst": `${2.6 + 0.8 * e}`,
                                  animation: `spWishBurst ${0.9 + 0.35 * e}s ${0.12 * e}s cubic-bezier(.16,.8,.4,1) both`,
                                },
                              },
                              `burst-${e}`,
                            ),
                          ),
                          o.map((e, a) =>
                            (0, t.jsx)(
                              "span",
                              {
                                "aria-hidden": !0,
                                className:
                                  "pointer-events-none absolute rounded-full",
                                style: {
                                  width: e.size,
                                  height: e.size,
                                  background: e.color,
                                  "--sp-sx": `${e.x.toFixed(1)}px`,
                                  "--sp-sy": `${e.y.toFixed(1)}px`,
                                  animation: `spWishSpark ${e.duration}s cubic-bezier(.16,.8,.4,1) both`,
                                },
                              },
                              `spark-${a}`,
                            ),
                          ),
                        ],
                      })
                    : null,
                  (0, t.jsxs)("button", {
                    type: "button",
                    "aria-label": n.wish.aria,
                    className:
                      "relative flex h-28 w-28 items-center justify-center rounded-full",
                    style: {
                      touchAction: "none",
                      background: "var(--wish-pad-bg)",
                      border: "1px solid var(--wish-pad-border)",
                      transform: d ? "scale(1.06)" : "scale(1)",
                      transition: "transform 500ms cubic-bezier(.3,1.2,.4,1)",
                    },
                    onPointerDown: j,
                    onPointerUp: z,
                    onPointerCancel: z,
                    onPointerLeave: z,
                    onLostPointerCapture: z,
                    onKeyDown: N,
                    onKeyUp: C,
                    onContextMenu: (e) => e.preventDefault(),
                    children: [
                      (0, t.jsxs)("svg", {
                        className: "absolute inset-0 h-full w-full -rotate-90",
                        viewBox: "0 0 100 100",
                        "aria-hidden": !0,
                        children: [
                          (0, t.jsx)("circle", {
                            cx: "50",
                            cy: "50",
                            r: 44,
                            fill: "none",
                            stroke: "var(--wish-ring-track)",
                            strokeWidth: "3",
                          }),
                          (0, t.jsx)("circle", {
                            ref: h,
                            cx: "50",
                            cy: "50",
                            r: 44,
                            fill: "none",
                            stroke: "var(--wish-ring-fill)",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            strokeDasharray: tY,
                            style: { strokeDashoffset: tY },
                          }),
                        ],
                      }),
                      (0, t.jsx)("span", {
                        "aria-hidden": !0,
                        className:
                          "mv-wish-star relative flex h-[86%] w-[86%] items-center justify-center overflow-hidden rounded-full",
                        "data-done": m,
                        style: {
                          animation: S
                            ? "spHeartBeat 1.1s ease-in-out infinite"
                            : "none",
                        },
                        children: (0, t.jsx)(tU, {
                          "aria-hidden": "true",
                          className: "mv-wish-star-icon h-12 w-12",
                          fill: "currentColor",
                          strokeWidth: 1.5,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("p", {
                className: "text-xs",
                style: { color: "var(--text-muted)", letterSpacing: "0.1em" },
                children: n.wish.hold,
              }),
            ],
          }),
        ],
      });
    }
    let tJ = "(prefers-reduced-motion: reduce)";
    function tX(e) {
      let t = window.matchMedia(tJ);
      return (
        t.addEventListener("change", e),
        () => t.removeEventListener("change", e)
      );
    }
    let tV = [
      "unlock",
      "dark",
      "surprise",
      "voice",
      "cake",
      "wish",
      "letter",
      "bloom",
      "keepsake",
      "share",
    ];
    function tQ({ gift: e }) {
      let n = l(),
        o = v(),
        c = (0, a.useMemo)(
          () => ({
            ...e,
            photos: e.photos.map((t, a) => {
              if ("vi" !== o && e.photos === u.photos) {
                let e = m[o][a];
                return { ...t, alt: e || n.common.photo, caption: e };
              }
              return t.generatedAlt
                ? {
                    ...t,
                    alt: `${n.common.photo} — ${e.recipientName || n.common.recipient}`,
                  }
                : t;
            }),
            recipientName: e.recipientName || n.common.recipient,
            senderName: e.senderName || n.common.sender,
          }),
          [e, n, o],
        ),
        d = (0, a.useSyncExternalStore)(
          tX,
          () => window.matchMedia(tJ).matches,
          () => !1,
        ),
        p = (0, a.useMemo)(() => {
          let e;
          return (
            (e =
              ("countdown" === c.unlockMode || "date" === c.unlockMode) &&
              !!c.birthdayDate),
            tV.filter((t) => {
              switch (t) {
                case "unlock":
                  return e;
                case "voice":
                  return !!c.voiceUrl;
                default:
                  return !0;
              }
            })
          );
        }, [c]),
        h = (0, a.useMemo)(
          () =>
            "vi" === o
              ? (function (e, t, a = r) {
                  let n = e?.trim(),
                    o = t?.trim();
                  return n || o
                    ? (function e(t, a) {
                        if ("string" == typeof t) return a(t);
                        if (Array.isArray(t)) return t.map((t) => e(t, a));
                        if (t && "object" == typeof t) {
                          let r = {};
                          for (let [n, s] of Object.entries(t)) r[n] = e(s, a);
                          return r;
                        }
                        return t;
                      })(a, (e) => {
                        if (e === a.share.eyebrow) return e;
                        let t = e;
                        return (
                          n && (t = n === "chị"
                            ? t.replace(/(?<![\p{L}\p{M}])chị(?![\p{L}\p{M}])/giu, "chị")
                            : s(t, "chị", n)),
                          o && (t = s(t, "em", o)),
                          t
                        );
                      })
                    : a;
                })(c.recipientName, c.senderName, n)
              : n,
          [c.recipientName, c.senderName, n, o],
        ),
        [f, g] = (0, a.useState)(() => p[0]),
        [b, x] = (0, a.useState)(!1),
        [y, w] = (0, a.useState)(!1),
        [k, j] = (0, a.useState)(!1),
        [z, N] = (0, a.useState)(0),
        [C, S] = (0, a.useState)(""),
        $ = (0, a.useRef)([]),
        M = (0, a.useCallback)((e, t) => {
          let a = setTimeout(t, e);
          return ($.current.push(a), a);
        }, []);
      ((0, a.useEffect)(() => {
        let e = $.current;
        return () => {
          (e.forEach(clearTimeout), (e.length = 0));
        };
      }, []),
        (0, a.useEffect)(() => {}, []));
      let T = d ? 60 : 420,
        E = (0, a.useCallback)(
          (e) => {
            (x(!0),
              M(T, () => {
                (g(e), x(!1));
              }));
          },
          [M, T],
        ),
        R = (0, a.useCallback)(() => {
          let e = p.indexOf(f),
            t = p[e + 1];
          t && E(t);
        }, [E, f, p]),
        A = (0, a.useCallback)(() => {
          if ("dark" !== f) return;
          let e = d ? 40 : 900;
          (w(!0), M(e, () => g("surprise")), M(e + 40, () => w(!1)));
        }, [M, d, f]);
      (0, a.useEffect)(() => {
        if ("surprise" !== f) return;
        let e = setTimeout(() => j(!0), d ? 300 : 2600);
        return () => clearTimeout(e);
      }, [d, f]);
      let D = (0, a.useCallback)(() => {
          M(2300, R);
        }, [R, M]),
        F = (0, a.useCallback)(() => {
          M(7e3, R);
        }, [R, M]),
        L = (0, a.useCallback)(() => {
          (g(p[0]),
            x(!1),
            w(!1),
            j(!1),
            N(0),
            S(""),
            window.scrollTo({ top: 0 }));
        }, [p]);
      return (0, t.jsx)(i, {
        value: h,
        children: (0, t.jsxs)("div", {
          "data-sp-stage": f,
          "data-room": tk.has(f) ? "lit" : tj.has(f) ? "vintage" : "dark",
          className:
            "relative flex min-h-[100dvh] w-full flex-col overflow-hidden",
          style: {
            background: e8,
            color: e1,
            WebkitTouchCallout: "none",
            overflowWrap: "anywhere",
            wordBreak: "break-word",
            "--sp-accent": "var(--accent-alt)",
            "--sp-glow": "var(--glow-warm)",
            "--sp-blow": z,
          },
          children: [
            (0, t.jsx)(P, { src: c.musicUrl }),
            (0, t.jsx)("div", {
              "aria-hidden": !0,
              className: "absolute inset-0 z-0",
              style: { pointerEvents: "none" },
              children: (0, t.jsx)(tT, { stage: f, reduced: d }),
            }),
            (0, t.jsxs)("div", {
              className: "relative z-10 flex min-h-[100dvh] w-full flex-col",
              style: {
                opacity: +!b,
                transition: `opacity ${T}ms var(--ease-soft)`,
              },
              children: [
                "unlock" === f &&
                  (0, t.jsx)(tH, {
                    mode: "date" === c.unlockMode ? "date" : "countdown",
                    birthdayDate: c.birthdayDate,
                    recipientName: c.recipientName,
                    onUnlock: R,
                    reduced: d,
                  }),
                "dark" === f && (0, t.jsx)(tu, { onFlip: A, reduced: d }),
                "surprise" === f &&
                  (0, t.jsx)(tB, {
                    recipientName: c.displayName || c.recipientName,
                    age: c.age,
                    showNext: k,
                    onNext: R,
                  }),
                "voice" === f &&
                  (0, t.jsx)(tO, {
                    audioUrl: c.voiceUrl,
                    onDone: R,
                    reduced: d,
                  }),
                "cake" === f &&
                  (0, t.jsx)(tc, {
                    age: c.age,
                    onAllOut: D,
                    onBlowProgress: N,
                    reduced: d,
                  }),
                "wish" === f && (0, t.jsx)(tK, { onDone: F, reduced: d }),
                "letter" === f &&
                  (0, t.jsx)(ty, {
                    body: c.letterBody || h.letterBodyFallback,
                    senderName: c.senderName,
                    recipientName: c.recipientName,
                    photo: c.photos[0],
                    location: c.location,
                    onNext: R,
                    reduced: d,
                  }),
                "bloom" === f &&
                  (0, t.jsx)(tr, {
                    age: c.age,
                    recipientName: c.recipientName,
                    photos: c.photos,
                    onNext: R,
                    reduced: d,
                  }),
                "keepsake" === f &&
                  (0, t.jsx)(tf, {
                    recipientName: c.displayName || c.recipientName,
                    senderName: c.senderName,
                    age: c.age,
                    birthdayDate: c.birthdayDate,
                    photo: c.keepsakePhoto || c.photos[0],
                    wish: C,
                    onWishChange: S,
                    onOpenBouquet: R,
                    onRestart: L,
                  }),
                "share" === f &&
                  (0, t.jsx)(tW, {
                    recipientName: c.displayName || c.recipientName,
                    senderName: c.senderName,
                    age: c.age,
                    birthdayDate: c.birthdayDate,
                    photo: c.keepsakePhoto || c.photos[0],
                    wish: C,
                    onRestart: L,
                    reduced: d,
                  }),
              ],
            }),
            (0, t.jsx)("div", {
              "aria-hidden": !0,
              className: "pointer-events-none absolute inset-0 z-50 bg-white",
              style: {
                opacity: +!!y,
                transition: `opacity ${d ? 120 : 750}ms var(--ease-soft)`,
              },
            }),
          ],
        }),
      });
    }
    function t0(e, t) {
      for (let a of t) if (null != e[a] && "" !== e[a]) return e[a];
    }
    function t1(e, t) {
      let a = t0(e, t);
      return "string" == typeof a
        ? a.trim() || void 0
        : "number" == typeof a
          ? String(a)
          : void 0;
    }
    function t2() {
      let e = l(),
        [r, n] = (0, a.useState)(null);
      return ((0, a.useEffect)(() => {
        let e = !0,
          t = new URLSearchParams(window.location.search).get("id");
        return (
          (t
            ? fetch(
                "https://lovegift.online/api/settings/" + encodeURIComponent(t),
              )
                .then((e) => e.json())
                .then((e) =>
                  (function (e, t) {
                    if (!e || "object" != typeof e) return t;
                    let a = { ...t },
                      r = t1(e, ["recipientName", "recipient", "toName", "to"]);
                    r && (a.recipientName = r);
                    let n = t1(e, ["senderName", "sender", "fromName", "from"]);
                    n && (a.senderName = n);
                    let s = (function (e) {
                      if (!e) return;
                      let t = e.match(/^(\d{4})-(\d{2})-(\d{2})/);
                      if (t) return `${t[1]}-${t[2]}-${t[3]}`;
                      let a = e.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
                      if (a) {
                        let [, e, t, r] = a;
                        return `${r}-${t.padStart(2, "0")}-${e.padStart(2, "0")}`;
                      }
                      let r = new Date(e);
                      if (!Number.isNaN(r.getTime()))
                        return r.toISOString().slice(0, 10);
                    })(
                      t1(e, [
                        "startDate",
                        "birthdayDate",
                        "birthday",
                        "birthDate",
                        "dob",
                      ]),
                    );
                    if (s) {
                      a.birthdayDate = s;
                      let t = t1(e, ["age"]) || c(s);
                      t && (a.age = t);
                    }
                    let o = t1(e, [
                      "letterMessage",
                      "letterBody",
                      "letter",
                      "message",
                    ]);
                    o && (a.letterBody = o);
                    let i = t1(e, ["voice", "voiceUrl", "audio", "audioUrl"]);
                    i && (a.voiceUrl = i);
                    let l = t1(e, [
                      "music",
                      "musicUrl",
                      "song",
                      "bgm",
                      "backgroundMusic",
                    ]);
                    l && (a.musicUrl = l);
                    let d = (function (e, t) {
                      if (null == e) return [];
                      let a = Array.isArray(e) ? e : [e],
                        r = `Ảnh kỷ niệm của ${t}`.trim(),
                        n = [];
                      for (let e of a) {
                        if ("string" == typeof e) {
                          let t = e.trim();
                          t && n.push({ src: t, alt: r, generatedAlt: !0 });
                          continue;
                        }
                        if (e && "object" == typeof e) {
                          let t = t1(e, [
                            "src",
                            "url",
                            "image",
                            "imageUrl",
                            "link",
                          ]);
                          if (!t) continue;
                          let a = t1(e, ["alt", "caption", "title"]),
                            s = a || r,
                            o = t1(e, ["caption", "description", "text"]);
                          n.push({
                            src: t,
                            alt: s,
                            caption: o,
                            generatedAlt: !a,
                          });
                        }
                      }
                      return n;
                    })(
                      t0(e, ["image", "images", "photos", "pictures"]),
                      a.recipientName,
                    );
                    d.length > 0 && (a.photos = d);
                    let u = t1(e, ["unlockMode"]);
                    ("countdown" === u || "date" === u || "none" === u) &&
                      (a.unlockMode = u);
                    let m = t1(e, ["finalNote"]);
                    return (m && (a.finalNote = m), a);
                  })(e?.success ? e?.data?.settings : null, u),
                )
            : Promise.resolve(u)
          )
            .catch(
              (e) => (console.error("Lỗi khi fetch settings từ API:", e), u),
            )
            .then((t) => {
              e && n(t);
            }),
          () => {
            e = !1;
          }
        );
      }, []),
      r)
        ? (0, t.jsx)(tQ, { gift: r })
        : (0, t.jsx)("div", {
            "aria-busy": "true",
            className: "flex min-h-[100dvh] w-full items-center justify-center",
            style: { background: e8, color: e1 },
            children: (0, t.jsx)("span", {
              className: "text-sm opacity-60",
              children: e.common.loading,
            }),
          });
    }
    e.s(
      [
        "GiftLoader",
        0,
        function () {
          return (0, t.jsx)(w, { children: (0, t.jsx)(t2, {}) });
        },
      ],
      47805,
    );
  },
]);
