# Typography
This extension tries to help with common text patterns with the correct typographic character. Under the hood all rules are input rules.

## Installation
```bash
# with npm
npm install @tiptap/typography

# with Yarn
yarn add @tiptap/typography
```

## Rules
| Name                | Description                                                      |
| ------------------- | ---------------------------------------------------------------- |
| emDash              | Converts double dashes `--` to an emdash `—`.                    |
| ellipsis            | Converts three dots `...` to an ellipsis character `…`           |
| openDoubleQuote     | `“`Smart” opening double quotes.                                 |
| closeDoubleQuote    | “Smart`”` closing double quotes.                                 |
| openSingleQuote     | `‘`Smart’ opening single quotes.                                 |
| closeSingleQuote    | ‘Smart`’` closing single quotes.                                 |
| leftArrow           | Converts <code><&dash;</code> to an arrow `←` .                  |
| rightArrow          | Converts <code>&dash;></code> to an arrow `→`.                   |
| copyright           | Converts `(c)` to a copyright sign `©`.                          |
| registeredTrademark | Converts `(r)` to registered trademark sign `®`.                 |
| oneHalf             | Converts `1/2` to one half `½`.                                  |
| plusMinus           | Converts `+/-` to plus/minus sign `±`.                           |
| notEqual            | Converts `!=` to a not equal sign `≠`.                           |
| laquo               | Converts `<<` to left-pointing double angle quotation mark `«`.  |
| raquo               | Converts `>>` to right-pointing double angle quotation mark `»`. |

## Source code
[packages/typography/](https://github.com/ueberdosis/tiptap-next/blob/main/packages/typography/)

## Usage
<demo name="Extensions/Typography" highlight="12,31" />