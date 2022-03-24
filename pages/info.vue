<template>
  <main>
    <section class="section">
      <div class="container">
        <h2 class="title">このサイトについて</h2>
        <h3 class="question">これは何？</h3>
        <p class="answer">
          なををををををさん（<a href="https://twitter.com/70_pocky"
            >@70_pocky</a
          >）作の『不器用ビンボーダンス』というマンガの登場人物のセリフが、第何回のものかを検索するために作ったファンサイトです。
        </p>
        <h3 class="question">『不器用ビンボーダンス』について</h3>
        <p class="answer">以下から読めるので読んで。</p>
        <ul class="bukibin">
          <li>
            ニコニコ静画版（サイドストーリーも読める）：<br />
            <span class="bukibin-url"
              ><a href="https://seiga.nicovideo.jp/comic/41035"
                >https://seiga.nicovideo.jp/comic/41035</a
              >
            </span>
          </li>
          <li>
            Twitter モーメント版（<s>最新話まで読める</s>
            更新されなくなったから↑を読もう）：
            <ul>
              <li class="bukibin-url">
                <a href="https://twitter.com/i/moments/1119197021879934977"
                  >https://twitter.com/i/moments/1119197021879934977</a
                >
              </li>
              <li class="bukibin-url">
                <a href="https://twitter.com/i/moments/1147112145097654279"
                  >https://twitter.com/i/moments/1147112145097654279</a
                >
              </li>
              <li class="bukibin-url">
                <a href="https://twitter.com/i/moments/1176124205118550017"
                  >https://twitter.com/i/moments/1176124205118550017</a
                >
              </li>
            </ul>
          </li>
        </ul>

        <h3 class="question">使い方</h3>
        <ul class="answer">
          <li>Home ではメインの検索が行えます。</li>
          <li>List ではセリフの一覧を見ることができます。</li>
          <li>
            スマホのブラウザから、「ホーム画面に追加」するとアプリのように使えます。
          </li>
        </ul>
        <h3 class="question">セリフについて</h3>
        <p class="answer">
          現在手入力で文字起こししてスプレッドシートにまとめています。編集したい方は以下の
          URL よりお願いいたします。<br />
          <a
            href="https://docs.google.com/spreadsheets/d/10wbX66QkSPnSR8h2p0MdqWkgWklbS6RvwYYqJ6dtEEU/edit?usp=sharing"
            >https://docs.google.com/spreadsheets/d/10wbX66QkSPnSR8h2p0MdqWkgWklbS6RvwYYqJ6dtEEU/edit?usp=sharing</a
          >
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
h3.question {
  font-size: 1.5rem;
  margin-top: 30px;
}
h3.question:first-of-type {
  margin-top: 50px;
}
.answer {
  margin-top: 5px;
}
ul.answer {
  margin-left: 20px;
  list-style-type: disc;
}
ul.bukibin {
  margin-top: 10px;
}
.bukibin-url {
  margin-left: 10px;
}
</style>
