#!/usr/bin/env node
const {execSync} = require ('child_process');
const runCommand = command => {
    try {
        execSync(`${command}`, {stdio: 'inherit'});
    } catch (e) {
            console.error ('Failed to execute ${command}', e);
            return false;
        }
        return true;
    }

    const repoName = process.argv [2];
    const gitCheckoutCommand = `git clone --depth 1 https://github.com/ApplebaumIan/tu-cis-4398-docs-template.git ${repoName} && cd ${repoName} && rm -rf .git && git init && cd ..`;
    const installDepsCommand = `cd ${repoName}/documentation && yarn`;
    console.log( `Cloning the repository with name ${repoName}`);
    const checkedOut = runCommand (gitCheckoutCommand);
    if(!checkedOut) process.exit (  -1);
    console.log('Installing dependencies for ${repoName}');
    const installedDeps = runCommand (installDepsCommand);
    if(!installedDeps) process.exit(  -1);
    console.log ("Congratulations! You are ready. Follow the following commands to start");
    console.log(`cd ${repoName}/documentation && PROJECT_NAME=${repoName} yarn start`)
