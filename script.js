/* Новые элементы должны добавляться в список по нажатию на Enter */

sendInput.addEventListener('keydown', function(event) {
  if (event.key == 'Enter) {
      // отправка сообщения
      }
})

/* Пустые элементы не должны добавляться */

if (messageText != '') {
  messagesContainer.append(newMessage);
}

/* Если кликнуть на элемент списка, он зачеркивается */

			element.classList.add('class'); 
   
/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

			element.classList.toggle('class'); 

/* Очищать input после добавления нового элемента в список */

    sendInput.value = '';
