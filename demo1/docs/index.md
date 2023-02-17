# Hello VitePress

[Getting Started](/guide/getting-started.md)

---

title: Blogging Like a Hacker
lang: en-US

---

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

:tada: :100:

[[toc]]

::: raw
Wraps in a <div class="vp-raw" ></div>
:::

::: tip
This is a tip.
:::

```js
export default {
  name: "MyComponent", // [!code hl]
};
```

```js
export default {
  data() {
    return {
      msg: "Focused!", // [!code  focus]
    };
  },
};
```

![An image](./image.png)

---

title: Docs with VitePress
editLink: true

---

---

title: Docs with VitePress
editLink: true

---

# {{ $frontmatter.title }}

Guide content

---

{
"title": "Blogging Like a Hacker",
"editLink": true
}

---

{{ 1 + 1 }}

<span v-for="i in 3">{{ i }}</span>

<!-- <script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<pre>{{ page }}</pre> -->

::: v-pre
`{{ This will be displayed as-is }}`
:::

<script setup>
import CustomComponent from "./.vitepress/components/CustomComponents.vue"
</script>

# Docs

This is a .md using a custom component

<CustomComponent />

## More docs

...

---

---

prev: 'Get Started | Markdown'

---
