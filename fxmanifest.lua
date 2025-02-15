fx_version 'cerulean'
game 'gta5'

author 'Unix'
description 'Made By Unix store'
version '1.0.0'

shared_script '@es_extended/imports.lua'

client_scripts {
    'client.lua'
}

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/style.css',
    'html/script.js'
}

export 'ShowNotification'
