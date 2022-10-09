# Demo

```html
<template id="card_template">
  <section class="card-box">
    <h3 class="card-title">${title}</h3>
    <div class="card-body">
      <p class="time">${time}</p>
      <p class="location">${location}</p>
    </div>
  </section>
</template>
```

```js
document.body.insertAdjacentHTML('beforeend', templateToString(card_template.innerHTML, {
  title: "im title",
  time: "2022-10-09",
  location: "HangZhou"
}))
```