on:
  workflow_dispatch:
jobs:
  use_api_via_script:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - name: Check out repo content
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '16.17.0'
          cache: npm

      - name: Install dependencies
        run: npm install octokit

      - name: Run script
        env:
          TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          node .github/actions-scripts/use-the-api.mjs
