var DragManager = new function () {

    /**
     * Composite object to store info about draggable obj
     * {
     *   elem - on this element mouse was down
     *   avatar - this is a copy of elem for drag
     * }
     */
    var dragObject = {};
    var self = this;

    function onMouseDown(e) {
        if (e.which != 1) return;
        fillelem = document.querySelector('.fillMy');
        var elem = e.target.closest('.draggable');
        if (!elem) return;
        dragObject.elem = elem;

        return false;
    }

    function onMouseMove(e) {
        if (!dragObject.elem) return; // mouse isn't down
        if (!dragObject.avatar) {
            // start dragging if we need
            dragObject.avatar = createAvatar(e);
            if (!dragObject.avatar) { // cancel drag: unable to drag this obj
                dragObject = {};
                return;
            }
        }
        // show image movement
        dragObject.avatar.style.position = 'absolute';
        dragObject.avatar.style.left = e.pageX - dragObject.avatar.offsetWidth / 2 + 'px';
        dragObject.avatar.style.top = e.pageY - dragObject.avatar.offsetHeight / 2 + 'px';
        return false;
    }

    function onMouseUp(e) {
        if (dragObject.avatar) { // we dragged image
            finishDrag(e);
        }
        // drag is finished or is not started. Element is dropped. Clear dragObject
        dragObject = {};
    }

    function finishDrag(e) {
        var dropElem = findDroppable(e);
        if (!dropElem) {
            self.onDragCancel(dragObject);
        } else {
            self.onDragEnd(dragObject, dropElem);
        }
    }

    function createAvatar(e) {
        var avatar = dragObject.elem;
        avatar.parentNode.insertBefore(avatar.cloneNode(true), avatar);
        return avatar;
    }

    function findDroppable(event) {
        // hide element which we are dragging to be able to get element under image
        dragObject.avatar.style.display = 'none';
        // get element under mouse pointer
        var elem = document.elementFromPoint(event.clientX, event.clientY);
        // restore dragged element's visibility
        dragObject.avatar.style.display = 'block';
        if (elem == null) {
            // mouse pointer is out of screen
            return null;
        }
        return elem.closest('.droppable');
    }

    document.onmousemove = onMouseMove;
    document.onmouseup = onMouseUp;
    document.onmousedown = onMouseDown;
    this.onDragEnd = function (dragObject, dropElem) { };
    this.onDragCancel = function (dragObject) { };
};

DragManager.onDragCancel = function (dragObject) {
    dragObject.avatar.remove();
};

DragManager.onDragEnd = function (dragObject, dropElem) {
    dragObject.avatar.style.position = 'static';
    dropElem.appendChild(dragObject.elem);
    dragObject.avatar.parentNode.children[0].classList.remove("draggable");
    dragObject.avatar.parentNode.children[0].classList.remove("fillelem");
    dragObject.avatar.parentNode.classList.remove("droppable");
};

const btn = document.querySelector('button');
btn.addEventListener('click', onClickBtn);

// The button is preparing screen to new game
function onClickBtn() {
    const empties = document.querySelectorAll('.empty');
    for (const empty of empties) {
        if (!empty.classList.contains('droppable')) {
            empty.className += ' droppable';
        }
        while (empty.firstChild) {
            empty.removeChild(empty.firstChild);
        }
    }
}