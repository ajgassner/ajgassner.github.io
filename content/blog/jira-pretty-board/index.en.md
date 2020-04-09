---
title: "Jira Pretty Board"
date: 2020-04-08T12:21:44+01:00
draft: false
---

An alternative to the built-in Jira Agile Board. Displays all relevant Sprint data. Currently tested with Jira Cloud only.
It's a convenient pure digital Agile board if your team is not co-located, it can be used as an alternative to
[physical Possy boards]({{< ref "blog/printing-issues-with-possy" >}}).

<!--more-->

{{< figure src="cover.jpg" caption="I'm sorry for this bad quality image, I had to obfuscate it." alt="Jira Pretty Board" >}}

{{< button-link title="Jira Pretty Board on GitHub" href="https://github.com/ajgassner/jira-pretty-board" icon="fa-github" >}}
	View project on GitHub
{{< /button-link >}}

I created this project some time ago to teach myself Angular X and Bootstrap 4. The board can be used as an alternative to
the built-in Jira board. In my opinion it's a bit clearer than the standard solution. I have tested the functionality with
the Jira Cloud API only (https://developer.atlassian.com/cloud/jira/software/rest/\). I'm not sure if the board currently
works with the on-premise Jira Server edition. It's not necessary to enable CORS in Jira, the board gets served over a
web-server with a built-in HTTP reverse-proxy.
