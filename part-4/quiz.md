1. When you run a command in the terminal, where does BASH look for that command?
    - _first check with the function list to see if it contains a command by the name we are looking for._ [Source](http://www.tldp.org/LDP/Bash-Beginners-Guide/html/Bash-Beginners-Guide.html#sect_01_04_01_07)
- On a UNIX computer, how do you stop a running process?
    - _find the process identification number or PID by entering the `ps` command or `pidof <process name>`._
    - _then kill the process by entering `kill <pid number>` in the command line_ [Source](https://www.cyberciti.biz/faq/kill-process-in-linux-or-terminate-a-process-in-unix-or-linux-systems/)
- What packages do you have installed via homebrew?
    - _runing the command brew list shows the following packages install via homebrew: mongodb, node, openssl, postgresql, and readline._ [Source](https://apple.stackexchange.com/questions/101090/list-of-all-packages-installed-using-homebrew)
- On a UNIX computer, how do you find the process id of a running process?
    - _find the process identification number or PID by entering the `ps` command or `pidof <process name>`._
- In a terminal, what does control-c do?
    - _`Control+C` is used to kill a process with the signal SIGINT, and can be intercepted by a program so it can clean its self up before exiting, or not exit at all._ [Source](https://superuser.com/questions/262942/whats-different-between-ctrlz-and-ctrlc-in-unix-command-line)
- What would be the result of typing the following commands?
    - _`Control+A` is used to go to start of a line._ [Source](https://superuser.com/questions/262942/whats-different-between-ctrlz-and-ctrlc-in-unix-command-line)
- In a terminal, what does control-e do?
    - _`Control+E` is used to go to end of a line._ [Source](https://superuser.com/questions/262942/whats-different-between-ctrlz-and-ctrlc-in-unix-command-line)
- What keyboard shortcut do you use to split the screen in your editor?
    - _The "Command Pallet" dialog gives you commands "to split a pane in two" and more. Press `Ctrl` + `Shift` + `p` simultaneously and then type "split" in the dialog to get a list of split related commands._ [Source](https://github.com/pd-gmit/atom-cheatsheet/blob/master/atom_cheatsheet.md)
- What keyboard shortcut do you use to split the screen in your terminal?
    - _Hit `Command`+`D` to split the window vertically, or `Command`+`Shift`+`D` to split the window horizontally._ [Source](https://github.com/pd-gmit/atom-cheatsheet/blob/master/atom_cheatsheet.md)
- When a terminal command completes, how can you tell if it was successful or not?
    - _A green arrow at the beginning of the next command line indicates the terminal command was successful._
- What does your `~/.gitconfig` have in it? (paste the whole file here)
    `-credential.helper=osxkeychain
user.name=eobaah
user.email=eobaah@gmail.com
core.excludesfile=/Users/baahmac/.gitignore_global
difftool.sourcetree.cmd=opendiff "$LOCAL" "$REMOTE"
difftool.sourcetree.path=
mergetool.sourcetree.cmd=/Applications/SourceTree.app/Contents/Resources/opendiff-w.sh "$LOCAL" "$REMOTE" -ancestor "$BASE" -merge "$MERGED"
mergetool.sourcetree.trustexitcode=true
commit.template=/Users/baahmac/.stCommitMsg
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true
core.ignorecase=true
core.precomposeunicode=true_`
- What is the difference between a relative and absolute path?
    - _Relative file paths have to be calculated with respect to another URI. Absolute file paths provide the entire path without the need of another directory as a reference._ [Source](
https://stackoverflow.com/questions/21306512/difference-between-relative-path-and-absolute-path-in-javascript)
- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```

  And you were in the `linkedin-for-dancers` folder. What command would you use to copy the `README.md` file to the `pinterest-for-dogs` folder?
    - _`cp README.md ../pinterest-for-dogs`_
- What keyboard shortcut do you use, in your editor, when you want to open a specific file?
    - _`open <file name>`_    
- What files or folders do you want all git repositories to ignore?
    - _node_modules... unless I'm pushing to Azure cloud service_  
- What is the main difference between `Array.map` and `Array.forEach` in JavaScript?
    -_The essential difference between map and forEach in your example is that forEach operates on the original array elements, whereas map explicitly returns a new array as a result._[Source](
https://stackoverflow.com/questions/3034392/what-use-does-the-javascript-foreach-method-have-that-map-cant-do)
