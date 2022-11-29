import { Octokit, App } from "octokit";

export const getGitUserAxios = async(username, type, direction) => {

    const octokit = new Octokit({ auth: `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` });

    const { data: { login },} = await octokit.rest.users.getAuthenticated();
      console.log("Hello, %s", login);
    return login;

    // const response = await octokit.request('GET /users/{username}/repos{?type,sort,direction,per_page,page}', {
    //     username: 'CKIMM7'
    // })

    return response;
}





  


// const { data: { login }, } = await octokit.rest.users.getAuthenticated();
// console.log("Hello, %s", login);
