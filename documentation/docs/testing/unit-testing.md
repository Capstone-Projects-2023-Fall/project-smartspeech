---
sidebar_position: 1
---

# Unit Testing

## Frontend Unit Testing

Frontend testing is done via [jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). This allows for automatic async waiting[^1] and mocking callings since internet connectivity is prohibited in `jest`[^2].

`jest` also creates automatic coverage reports to check how many lines were checked.

Each[^3] component will be unit tested till atleast 80% coverage if 100% is not possible.

Frontend Unit Testing Docs are generated saved to: <a target="_blank" href="/typedoc/index.html">Frontend Docs</a>

The test documentation files will displayed with regular files but will have a `.text.tsx` extension.

[^1]: Async wating is required for async react state changes.
[^2]: Any test in `jest` which tries to send a request will be blocked as per unit testing specfictations.
[^3]: Some files will not have test. These files will be: data files for mocking and custom react hooks.
