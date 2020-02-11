---
title: "Trees by Joyce Kilmer"
description: "Text about this post"
date: 2019-01-13T20:28:42-06:00
images: ["/img/blog/environment.jpg"]
draft: false
---

Apfelkuchen meets Cupcake! Ihr wisst ja, dass ich ein großer Fan von Cupcakes bin, deshalb versuche
ich immer wieder mal Cupcakes mit anderen Dingen zu kombinieren, die ich ebenfalls mag ;) In diesem
Fall hat es einen Apfelkuchen getroffen. Keine schlechte Kombination muss ich sagen. Oder lasst es
mich anders ausdrücken – eine super Kombination! ;)

<!--more-->

Ich liebe meinen Job, zwischendurch bin ich aber gerne in der Küche und probiere neue Sachen aus.
Viele meiner Freunde und Kollegen ermutigen mich zum Backen - aus einem relativ einfachen Grund:
Sobald ich etwas backe, bekommen sie das was übrig bleibt - und so wie es scheint, mögen sie das auch meistens ;)

```go {linenos=table,hl_lines=[8,"15-17"],linenostart=199}
// GetTitleFunc returns a func that can be used to transform a string to
// title case.
//
// The supported styles are
//
// - "Go" (strings.Title)
// - "AP" (see https://www.apstylebook.com/)
// - "Chicago" (see https://www.chicagomanualofstyle.org/home.html)
//
// If an unknown or empty style is provided, AP style is what you get.
func GetTitleFunc(style string) func(s string) string {
  switch strings.ToLower(style) {
  case "go":
    return strings.Title
  case "chicago":
    return transform.NewTitleConverter(transform.ChicagoStyle)
  default:
    return transform.NewTitleConverter(transform.APStyle)
  }
}
```

```kotlin
fun calculate(x: Int, y: Int, operation: (Int, Int) -> Int): Int {  // 1
    return operation(x, y)                                          // 2
}

fun sum(x: Int, y: Int) = x + y                                     // 3

fun main() {
    val sumResult = calculate(4, 5, ::sum)                          // 4
    val mulResult = calculate(4, 5) { a, b -> a * b }               // 5
    println("sumResult $sumResult, mulResult $mulResult")
}
```

Some small code `code`
