module.exports = {
    //インデント幅（半角スペースの数）
    tabWidth: 2,

    //インデントにタブを使うかどうか（falseならスペース）
    useTabs: false,

    //1行の最大文字数、これを超えると自動で改行される
    printWidth: 80,

    //文末にコロンをつけるか
    semi: true,

    //文字列をシングルクォートにするか（falseならダブルクォート）
    singleQuote: false,

    //オブジェクトのプロパティ名にクォートをつけるルール
    quoteProps: "as-needed",

    //JSX内の属性をシングルクォートで書くかどうか
    jsxSingleQuote: false,

    //複数行のjsx要素で閉じタグを同じ行に書くか
    jsxBracketSameLine: false,

    //複数行の配列やオブジェクトで最後にカンマをつけるか
    trailingComma: "none",

    //波括弧の前後にスペースを入れるか
    bracketSpacing: true,

    //アロー関数に引数が１つのとき、括弧をつけるか
    arrowParens: "avoid",

    //改行コードの指定（環境に合わせて自動）
    endOfLine: "auto",
}