Part 1 

1. What command do you use to setup a git repository inside of your folder?
git init 

2. What command do you use to ask git to start tracking a file?
git add -A

3. What command do you use to ask git to move your file from the staging area to the repository?
git commit -m "add file to repo"




1. What command do you use to pull any changes from the master repository into your local repository?
git pull origin master

2. What command do you use to unstage a file?
git reset 

3. What command do you use to change your files back to how they were after a commit?
git checkout -- <target>.

4. Why is it important to use -- when changing files back to a previous state?
By using '--', it is promising the command line that there are no more options after the '--'. If you have a branch with the same name, it will revert the file instead of switching to the branch of the same name.

5. Why might you want to reset your files back to a previous commit?
This would be extremely useful if you made a change that you didn't want, or didn't work and you want to start from your previous commit. 




1. What command do you use to create a branch?
git branch

2. What command do you use to use a different branch?
git checkout

3. Why would you want to use a branch other than the default master?
You would want to use another branch other than the default master when you're working on multiple features. This will avoid any unfinished features on the master branch.


1. Give an example for when you would use git merge and give an example for when it would be better to submit a pull request to have your branch merged.

git merge is used to make changes from one branch to another. A pull request is used to allow somebody else to fork and look at your code before merging.


2. What command do you use to send all of the work that you've done locally to your remote repository?
git push 

PART 2: 

Watch HTML video

PART 3: 


