import React from "react";
import * as NovelReader from "./novelReader";

export default {
  title: "Novel Reader",
  component: NovelReader.Root,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args: { text: string }) => {
  return (
    <NovelReader.Root
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundColor: "#f0f0f0",
      }}
    >
      <NovelReader.RightButton
        style={{
          position: "absolute",
          opacity: "0",
          height: "100%",
          width: "50%",
          top: "0",
          right: "0",
          border: "none",
          margin: 0,
          padding: 0,
        }}
      >
        前ページ
      </NovelReader.RightButton>
      <NovelReader.LeftButton
        style={{
          position: "absolute",
          opacity: "0",
          height: "100%",
          width: "50%",
          top: "0",
          left: "0",
          border: "none",
          margin: 0,
          padding: 0,
        }}
      >
        次ページ
      </NovelReader.LeftButton>
      <NovelReader.Viewer
        style={{
          maxWidth: `${17 * 1.5}em`,
          maxHeight: "42em",
          padding: 0,
          border: "none",
          margin: "auto",
          writingMode: "vertical-rl",
          overflow: "scroll",
          lineHeight: "1.5",
          scrollbarColor: "transparent transparent",
          backgroundColor: "#fff",
        }}
      >
        {args.text}
      </NovelReader.Viewer>
    </NovelReader.Root>
  );
};
export const Default = Template.bind({});
Default.args = {
  text: (
    <>
      <header>
        <h1>
          <strong>影の都市</strong>
        </h1>
        <p>
          <em>小説家: ジェーン・ドウ</em>
        </p>
        <hr />
      </header>

      <main>
        <section id="chapter-1">
          <h2>
            第一章: <strong>霧の中の出会い</strong>
          </h2>
          <blockquote>
            <p>
              <em>「この街には、秘密が隠されている」</em>
            </p>
            <p>古びた喫茶店の奥で、謎めいた男はそう言った。</p>
          </blockquote>
          <h3>
            <strong>登場人物</strong>
          </h3>
          <ul>
            <li>
              <strong>エミリー・クロウ</strong>: 主人公。好奇心旺盛な女性記者。
            </li>
            <li>
              <strong>ルーカス・グレイ</strong>: 影の組織「セプター」の一員。
            </li>
            <li>
              <strong>ノア・ヘイズ</strong>:
              エミリーの幼なじみで、天才ハッカー。
            </li>
          </ul>
          <h4>エミリーの心情</h4>
          <ol>
            <li>街の霧に包まれた謎を解きたい。</li>
            <li>だが、何か恐ろしい秘密があるような気がしてならない。</li>
            <li>それでも引き返せない。</li>
          </ol>
        </section>

        <hr />

        <section id="chapter-2">
          <h2>
            第二章: <strong>暗号の謎</strong>
          </h2>
          <pre>
            <code>
              {`# ルーカスがエミリーに手渡したメモに書かれていた暗号
def decipher(message):
    return ''.join(chr(ord(char) - 3) for char in message)

cipher_text = "Khoor, Zruog!"
print(decipher(cipher_text))  # 解読: Hello, World!`}
            </code>
          </pre>
          <p>
            エミリーはノアに助けを求めた。彼はすぐに暗号を解読し、一つの住所を導き出した。
          </p>
        </section>

        <hr />

        <section id="locations">
          <h3>
            <strong>重要な場所</strong>
          </h3>
          <ul>
            <li>
              <strong>「ヴェール通り」</strong>:
              街の中心にある古い図書館がある通り。
            </li>
            <li>
              <strong>「影の広場」</strong>:
              街の伝説に登場する、不思議な噂が絶えない場所。
            </li>
          </ul>
          <figure>
            <img src="https://example.com/shadow_city.jpg" alt="影の都市" />
            <figcaption>画像: 神秘的な霧に包まれた都市の全景</figcaption>
          </figure>
        </section>

        <hr />

        <section id="chapter-3">
          <h2>
            第三章: <strong>真実への旅路</strong>
          </h2>
          <p>エミリーたちは霧の中、図書館へ向かう。</p>
          <table>
            <thead>
              <tr>
                <th>時間</th>
                <th>場所</th>
                <th>イベント</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>19:00</td>
                <td>自宅</td>
                <td>ノアの解読作業が完了</td>
              </tr>
              <tr>
                <td>20:30</td>
                <td>ヴェール通り</td>
                <td>図書館で新たな暗号を発見</td>
              </tr>
              <tr>
                <td>22:00</td>
                <td>影の広場</td>
                <td>「セプター」と対峙</td>
              </tr>
            </tbody>
          </table>
        </section>

        <hr />

        <footer>
          <h3>
            <strong>脚注</strong>
          </h3>
          <ol>
            <li>
              <a href="#">セプター</a>: 街を支配する謎の組織。
            </li>
            <li>
              <a href="#">暗号</a>: 文書に隠された秘密を解き明かす鍵。
            </li>
          </ol>
          <blockquote>
            <p>
              <strong>「エミリー、次の一手は君にかかっている」</strong>
            </p>
            <p>ノアの声が霧の中に響いた。その瞬間、すべてが動き出す。</p>
          </blockquote>
        </footer>
        <section id="chapter-4">
          <h2>
            第四章: <strong>沈黙の図書館</strong>
          </h2>
          <p>
            エミリーとノアは、霧に包まれたヴェール通りの図書館に足を踏み入れた。扉を押し開けると、中には古びた本の匂いと静寂が満ちていた。暗がりの中、明かりを頼りに進むと、壁一面を覆う書棚が視界に現れた。その中の一冊、一見何の変哲もない黒革の本に、彼らは目を奪われる。
          </p>
          <p>
            「これだ…暗号の答えはここにあるはずだ。」ノアが本を開くと、中には無数の手書きの文字と奇妙な図形が描かれていた。しかし、そのどれもが意味を持たないように見える。エミリーがページをめくると、特定の文字だけが薄く浮かび上がることに気づいた。
          </p>
          <blockquote>
            <p>
              <em>「文字が…光っている？いや、これも暗号だわ。」</em>
            </p>
          </blockquote>
          <p>
            彼女の声に反応するように、図書館の奥から微かな音が聞こえた。振り返った二人の前には、床に刻まれた円形の紋章が浮かび上がり始めていた。
          </p>
        </section>

        <hr />

        <section id="chapter-5">
          <h2>
            第五章: <strong>「セプター」の影</strong>
          </h2>
          <p>
            エミリーが本を抱え、ノアとともに紋章を調べようとすると、背後から低い声が響いた。
          </p>
          <blockquote>
            <p>
              <em>「それ以上先に進むのは、命を賭ける覚悟が必要だ。」</em>
            </p>
          </blockquote>
          <p>
            声の主は、ルーカス・グレイだった。影の組織「セプター」の一員である彼の登場に、エミリーは思わず息を呑んだ。
          </p>
          <p>
            「セプターがこの街を支配している理由は、ただの金や権力ではない。」彼は静かに続けた。「この図書館には、世界の理を揺るがす秘密が隠されているんだ。」
          </p>
          <p>
            ノアは冷静に応じた。「その理とやらを解き明かせば、セプターの支配も終わるんだろう？」
          </p>
          <p>
            ルーカスは笑みを浮かべるが、その目には警戒の色が宿っていた。「だが、それは容易なことじゃない。この本が暗号の一部だとしても、完全な解答には、&quot;影の鍵&quot;が必要だ。」
          </p>
        </section>

        <hr />

        <section id="chapter-6">
          <h2>
            第六章: <strong>影の鍵</strong>
          </h2>
          <p>
            影の鍵とは何なのか？ルーカスの話によると、それは古代から伝わる装置の一部であり、この図書館の地下深くに眠っている可能性が高いという。しかし、その場所には厳重な結界が張られており、鍵を取り戻すにはリスクを覚悟しなければならない。
          </p>
          <p>
            「それでも行くの？」ルーカスが問いかけると、エミリーは静かにうなずいた。「ここで諦めるわけにはいかない。この街を救うためなら。」
          </p>
          <p>
            ノアも同意した。「僕たちは、ここまで来たんだ。やるしかないだろう。」
          </p>
          <p>
            三人は力を合わせ、地下へ続く秘密の入り口を見つけ出した。鉄製の扉を開けると、冷たい空気が肌を刺すように流れ込んできた。そこに広がるのは、忘れられた時代の遺跡だった。
          </p>
        </section>
      </main>
    </>
  ),
};
