# Notice:

If you update to this version, you'll need to do the following:

1. rename all 'index.md' to '_index.md'.
2. rename all 'index.html' to '_index.html'.
3. set the layout to 'single' in the header sections.

# Material Docs

A material design theme for [Hugo](https://gohugo.io).

[![Screenshot](https://raw.githubusercontent.com/digitalcraftsman/hugo-material-docs/master/static/images/screen.png)](https://digitalcraftsman.github.io/hugo-material-docs/)

## Add as submodule

Add to an existing repo as a submodule navigate to your themes directory and run:

    git submodule add -- https://github.com/jshook/hugo-material-docs.git ./hugo-material-docs

When your repo gets cloned the user must run:

    git submodule update --init
    git submodule sync


## Quick start

Install with `git`:


    git clone https://github.com/digitalcraftsman/hugo-material-docs.git themes/hugo-material-docs


Next, take a look in the `exampleSite` folder at. This directory contains an example config file and the content for the demo. It serves as an example setup for your documentation. 

Copy at least the `config.toml` in the root directory of your website. Overwrite the existing config file if necessary. 

Hugo includes a development server, so you can view your changes as you go -
very handy. Spin it up with the following command:

``` sh
hugo server
```

Now you can go to [localhost:1313](http://localhost:1313) and the Material
theme should be visible. For detailed installation instructions visit the [demo](http://themes.gohugo.io/theme/material-docs/).

Noteworthy changes of this theme are listed in the [changelog](https://github.com/digitalcraftsman/hugo-material-docs/blob/master/CHANGELOG.md).

## Acknowledgements

Thanks to [Digitalcraftsman](https://github.com/digitalcraftsman) for the adaptation as a Hugo theme.

A big thank you to [Martin Donath](https://github.com/squidfunk). He created the original [Material theme](https://github.com/squidfunk/mkdocs-material) for Hugo's companion [MkDocs](http://www.mkdocs.org/). This port wouldn't be possible without him.

Furthermore, thanks to [Steve Francia](https://gihub.com/spf13) for creating Hugo and the [awesome community](https://github.com/spf13/hugo/graphs/contributors) around the project.


## Features

### Download-Links / Stars (GitHub)

One of the main features of this template is showing a link to the GitHub repo and a download button / star count for the repo on the left. You can also activate a custom download url, if this works better for you.

#### Warning
Only GitHub-Download or Custom-Download URL can be used!
Either set use_github_download to true or provide a url in custom_download_url

#### GitHub-Star Count

```
use_github_star = "true"
repo_url = "https://github.com/gohugoio/hugo"
```

#### GitHub-Download URL

```
use_github_download = "true"
repo_url = "https://github.com/gohugoio/hugo"
```

#### Custom-Download URL
```
custom_download_url = "https://gohugo.io/getting-started/installing"
```

### Build Date

If you want to add a build date to each page, simply specify the variable `build_date_format` in your config.   
[How to format date in hugo](https://gohugo.io/functions/format#go-s-layout-string)

### Font Selection
If you don't want to use the standard font "Roboto (Mono)", you can select
fonts from google:
```
[params]
[params.font]
  code = "Noto Serif"
  text = "Noto Sans"
```
(insert that code in config.toml)

### Buttons
Use buttons with icons in your text text:
```
{{% button href="/test" icon="fab fa-github" icon-position="right" %}}text and icon after text{{% /button %}}
```

### Social Links
We added support for matrix, irc and mailing list links:
```
[social]
    matrix = "<link to matrix channel, accessable via webpage (like matrix.org provides)>"
    irc = "<url that would follow after 'irc://'>"
    mailinglist = "<link to subscription interface>"
```

### Spoiler
Put a spoiler in your page:
```
{{< spoiler "Button Text Here" >}}
Your spoiler text her
{{< /spoiler >}}
```
or with a seperate hide button text:
```
{{< spoiler "show spoiler" "hide spoiler" >}}
Your spoiler text her
{{< /spoiler >}}
```

## License

The theme is released under the MIT license. Read the [license](https://github.com/digitalcraftsman/hugo-material-docs/blob/master/LICENSE.md) for more information.

