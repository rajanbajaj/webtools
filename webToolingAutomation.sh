#/bin/bash

#1. Sublime Text 3
if which subl > /dev/null
then
    echo "Sublime Text installed is installed, skipping..."
else
    if which wget > /dev/null
    then
        wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -
        sudo apt-get install apt-transport-https
        echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
        sudo apt-get update
        sudo apt-get install sublime-text
    else
            echo "Wget not found. Sublime text no installed."
fi

fi

#2. Node
if which node > /dev/null
then
    echo "node is installed, skipping..."
else
    #DEPENDENCIES
    #1.Ruby and GCC. You’ll need Ruby 1.8.6 or newer and GCC 4.2 or newer. 
    sudo apt-get install build-essential curl git m4 ruby texinfo libbz2-dev libcurl4-openssl-dev libexpat-dev libncurses-dev zlib1g-dev

    #2.linuxbrew
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)"
    
    #add Linuxbrew to your PATH and to your bash shell profile script
    test -d ~/.linuxbrew && PATH="$HOME/.linuxbrew/bin:$HOME/.linuxbrew/sbin:$PATH"
    test -d /home/linuxbrew/.linuxbrew && PATH="/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin:$PATH"
    test -r ~/.bash_profile && echo "export PATH='$(brew --prefix)/bin:$(brew --prefix)/sbin'":'"$PATH"' >>~/.bash_profile
    echo "export PATH='$(brew --prefix)/bin:$(brew --prefix)/sbin'":'"$PATH"' >>~/.profile
        
    #install node
    brew install node
fi

#3.GulpJs
if which gulp >/dev/null
then
    echo "gulp is installed, skipping..."
else
    npm install --global gulp-cli+
fi

#4.gulp-sass
# npm install gulp-sass --save-dev

#5.browser-sync
if which browser-sync >/dev/null
then
    echo "browser-sync is installed, skipping..."
else
    npm install --global browser-sync
fi

#6. eslint
if which eslint >/dev/null
then
    echo "eslint is installed, skipping..."
else
    npm install --global eslint
    
fi

# npm install gulp-eslint --save-dev
# npm install --save-dev jasmine
# npm install phantomjs --save-dev
# npm install gulp-jasmine-phantom --save-dev
# npm install --save-dev gulp-concat

# #11. Babel
# if which babel >/dev/null
# then
#     echo "eslint is installed, skipping..."
# else
#     npm install --save-dev babel-cli babel-preset-env
# fi

#10. yo scaffolding tool
if which yo >/dev/null
then
    echo "yeoman is installed, skipping..."
else
    npm install --global yo
fi