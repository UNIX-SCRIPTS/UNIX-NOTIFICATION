RegisterCommand("notifytest", function()
    ShowNotification("success", "NOTIFICATION", "This is a success test!", 5000)
end, false)

function ShowNotification(type, title, message, duration)
    SendNUIMessage({
        action = "showNotification",
        type = success, -- 'success', 'error', 'info'
        title = title,
        message = message,
        duration = duration or 5000
    })
end

exports("ShowNotification", ShowNotification)
