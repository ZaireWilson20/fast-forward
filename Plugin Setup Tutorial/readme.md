## This is a tutorial to show fundamentally how to build a plugin in the Atom text Editor. You should follow the readme with the provided code and comments in the accompanying files. 

> PREREQS:
    >   Javascript/CoffeeScript
    >   Knowing how to use the Command Line on respective OS
    >   HTTP
    >   Promises 
	
> Setup
    >   Firstly, make sure atom is installed on your system. You can find the latest versions on the Atom Website. 
    >   Once installed, if you're using a newer version of atom, you should have the apm(atom package commandline tool) installed as well. You can check by running [apm -v] command into your command line, to which it should show a list of the all packages that are needed(apm, npm, node, atom, python, git, visual studio)
    >   Creating New Package
        >   Open up the Command Search/Command Pallete by pressing Ctrl-Shift-P(windows/linux) or Cmd-Shift-P(mac)
        >   Search for "Package Generator: Generate Package" 
        >   Once you click on respective tab, you can then enter the path and name for your package. In our case we'll do "C:\Users\My-Name\Documents\Coding&&Community Plugin\fast-forward\lib\Plugin Setup Tutorial\tutPackage"
        >   After new package is created, atom will open up the file repository filled with starter code that we can edit and change to our liking.


> Playing with Starter Code
    >   First, reload the editor by running the "Window: Reload" command in the command pallete.
        > Everytime we want to run changes on atom, we'll use the Window: Reload command.
    >   To run the package, navigate to the toggle command at "Packages > name-of-package > Toggle", then press the toggle button. You should get a message saying the toggle is ALIVE.
    >   FIRST CODE CHANGE :)
        >   Lets change the functionality of the toggle command!
        >   Open up your package js file, should be in lib\name-of-package.js
        >   Find toggle function and change to the following  
            >
            >    toggle() {
            >        let editor
            >        if (editor = atom.workspace.getActiveTextEditor()) {
            >            let selection = editor.getSelectedText()
            >            let reversed = selection.split('').reverse().join('')
            >            editor.insertText(reversed)
            >        }       
            >    
            >    }
        >   This code reverses selected text hehe
        >   In order to run, make sure you reload the atom window. Make a new file and type in literally anything you want. After you do so, select the text snippet the right click. You should see a toggle your-package-name in the drop down menu. Click it and wala, your text reverses!
        >   From this point, we will make use of this ability to manipulate commands, use nodeJs modules, add HTML, and implement some of the APIs atom gives us. 

