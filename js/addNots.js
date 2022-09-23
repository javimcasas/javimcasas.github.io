function addNot() {
    var container = document.getElementById('container')
    var container_box = document.getElementById('container-box')
    var box = document.getElementById('box')

    var notifs_box = document.createElement('div');
    notifs_box.className = 'notifs-box';

    var notifs_head = document.createElement('div');
    notifs_head.className = 'notifs-head';

    var notifs_id = document.createElement('p');
    notifs_id.className = 'notifs-id'
    notifs_id.innerHTML = 'Notificación x:'

    var notifs_bin = document.createElement('input')
    notifs_bin.className = 'notifs-bin'
    notifs_bin.type = 'image'
    notifs_bin.src = 'images/trash-can.png'

    container.appendChild(container_box)
    container_box.appendChild(box)
    box.appendChild(notifs_box)
    notifs_box.appendChild(notifs_head)
    notifs_head.appendChild(notifs_id)
    notifs_head.appendChild(notifs_bin)

    var replaceDir = document.getElementById('notification')
    document.body.insertBefore(notifs_box, replaceDir)
}