# Material template

This repository contains both the source code of this course's webpage and the source for the content of the course. The content is located in the `data` folder and everything else is for the website.

## Contributing to the content

If you spot a mistake, feel free to open an issue in this repo after consulting with the course assistants.

If you'd help us making the correction, you can open a pull request with your proposed changes. You may find these resources helpful for doing this:

* [About pull requests](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
* [Markdown tutorial](https://commonmark.org/help/tutorial/)
* [Markdown specification](https://spec.commonmark.org/current/)

## Development environment

Below are instructions on how to setup a development environment on your own machine. These instructions are only relevant to you if you wish to chage how the course's website works or looks like. If you don't know how to program or only wish to contribute to the content of the course, please skip this section.

Requirements: recent Node

```sh
npm ci
npm run develop
```

Content is in the `data` folder.

Custom markdown components are located in `src/partials`

If you want to use local, unpublished version of moocfi-quizzes for testing, run `./use-local-quizzes.sh` before running the application.
If your configuration differs from the default, add the path to the moocfi-quizzes as the first argument to the script.
An illustration of the default configuration:

```
  (parent directory)
  /                \ 
(this repo)      [quizzes](https://github.com/rage/quizzes)
                      |
                  packages
                      |
                  moocfi-quizzes
```

Sometimes when making certain type of changes to the queries, you may wish to restart Gatsby automatically each time the development server exits. To accomplish this you can run the script: `./develop-loop.sh`.

## Authors

Material template created by [Henrik Nygren](https://github.com/nygrenh) and [Antti Leinonen](https://github.com/Redande).

# License

## Material template

Copyright 2018 [Henrik Nygren](https://github.com/nygrenh), [Antti Leinonen](https://github.com/Redande), and the [Agile Education Research group](https://www.helsinki.fi/en/researchgroups/data-driven-education).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

## Course material

The course material is licensed under a [Creative Commons BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed) license.
