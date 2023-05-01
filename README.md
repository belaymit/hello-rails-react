<a name="readme-top"></a>
<h3>React on Rails</h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 hello-rails-react <a name="about-project"></a>

**hello-rails-react** is a simple app that displays random greeting message that is stored in postgresql database to our react frontend app.

## Learning objectives

>- Implement a connection between a Ruby on Rails back-end and React front-end.
>- Understand the pros and cons of different approaches of connecting Ruby on Rails back-end with React front-end.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://react.dev/ror
    ">React</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://rubyonrails.org/">RoR</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- Display Greeting
- Store the state in Redux store


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## 💻 Getting Started <a name="getting-started"></a>


To get a local copy up and running, follow these steps.

### Prerequisites

### 1. Install Rails
 - But before you install Rails, you should check to make sure that your system has the proper prerequisites installed. These include:
  - Ruby
  - postgresql
### In order to install ruby:
#### Select your platform
 - MacOS
 - Ubuntu
 - Windows

### Tools on Unix based systems

There are several tools that can be used to install Ruby on your local machine. The most popular are:
```sh
   rbenv
   RVM
   asdf
```
We will go with rbenv because it does not override any of the system shell scripts like RVM and it allows us to compile older Ruby versions that will fail with RVM.

## MacOS

Run the following commands in your terminal:
```sh
brew install rbenv ruby-build
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile
rbenv install 3.0.1
rbenv global 3.0.1
ruby -v
```
> Note: If you are using a shell other than bash, for example zsh, you should change the first line to use zshrc like this:
```sh
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.zshrc
```
> or any other config file of your shell.

## Ubuntu

> You can install Ruby on Ubuntu in several ways. The easiest way is to run the following command (source):
```sh
  sudo apt-get install ruby-full
```
If that doesn't work, you can try installing Ruby using [rbenv](https://github.com/rbenv/rbenv). This is a version manager tool for the Ruby programming language on Unix-like systems.

Run the following commands in your terminal:

```sh
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL

rbenv install 3.0.1
rbenv global 3.0.1
ruby -v
```
consider checking [ Install ruby on Ubuntu 20.04 with rbenv.](https://linuxtut.com/install-ruby-on-ubuntu-20.04-with-rbenv-e419f/)

## Windows
Installing Ruby on Windows is a little more difficult than installing it on another OS. We would recommend using [WSL](https://learn.microsoft.com/en-us/windows/wsl/about), but you can also try to install Ruby directly on your OS with [rubyinstaller](https://rubyinstaller.org/).

```sh
WSL only works on 64-bit installations of Windows.
```

If you are using a 64-bit version of Windows 10, we recommend following [this](https://gorails.com/setup/windows/10) article to install Ruby.

If you can not use WSL then you should follow these steps:

> Download the last version of [RubyInstaller](https://rubyinstaller.org/downloads/).
> Run RubyInstaller and follow the steps described [here](https://stackify.com/install-ruby-on-windows-everything-you-need-to-get-going/).

### Check for your ruby version
 ```sh
  ruby --version
  ruby 2.7.0
 ```
To install Rails on Windows, you'll first need to install [Ruby Installer](https://rubyinstaller.org/).

### Installing PostgreSQL

To install PostgreSQL, first refresh your server’s local package index: follows this [link](https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart) for detail explanation
```sh
    sudo apt update
```
Then, install the Postgres package along with a -contrib package that adds some additional utilities and functionality:
```sh
    sudo apt install postgresql postgresql-contrib
```
Ensure that the service is started:
```sh
  sudo systemctl start postgresql.service
```
## Install rails
To install Rails, use the ``gem install`` command provided by RubyGems:
```sh
 gem install rails
```

### Setup

Clone this repository to your desired folder:


```sh
  cd my-folder
  git clone git@github.com:belaymit/budget-app-ror.git
```
## Install needed node dependencies
```sh
npm i react react-dom
npm i @babel/core @babel/preset-env @babel/preset-react babel-loader --dev
```
- configure webpack and bable
### Install app

Install this project with:


```sh
  cd hello-rails-react
  bundle install
```

### Usage

To run the project, execute the following command:


```sh
  ./bin/dev
```

### Run tests

To run tests, run the following command:

```sh
  to do
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Belay Birhanu G**

- GitHub: [@githubhandle](https://github.com/belaymit)
- Twitter: [@twitterhandle](https://twitter.com/2belamit)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/belay-bgwa/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## FUTURE FEATURES

- Add Greeting
- Modify Greeting


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](hhttps://github.com/belaymit/hello-rails-react/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project please consider starring it

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>


- I would like to thank Microverse Community 


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ (OPTIONAL) <a name="faq"></a>

- **Ruby on Rails: What it is and why you should use it for your web application**
  - Rails is a development tool which gives web developers a framework, providing structure for all the code they write. The Rails framework helps developers to build websites and applications, because it abstracts and simplifies common repetitive tasks.
  - One of key principles of Ruby on Rails development (henceforth ‘Rails’) is convention over configuration. This means that the programmer does not have to spend a lot of time configuring files in order to get setup, Rails comes with a set of conventions which help speed up development.
  - Another characteristic of Rails is the emphasis on RESTful application design. REST (Representational State Transfer) is a style of software architecture based around the client-server relationship. It encourages a logical structure within applications, which means they can easily be exposed as an API (Application Programming Interface).
  - From project management point of view, the Ruby on Rails community advocate Agile web development – an iterative development method, that encourages collaborative and flexible approach, which is particularly well-suited for web application development with fast-changing requirements.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.



<p align="right">(<a href="#readme-top">back to top</a>)</p>
