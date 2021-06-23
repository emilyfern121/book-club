async function commentFormHandler(event) {
    event.preventDefault();

    const username_text = document.querySelector('input[name="username"]').value.trim();

    const comment_text = document.querySelector('input[name="content"]').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (username_text && comment_text) {
        const response = await fetch('/api/discussion', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text,
                username_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();

        } else {
            alert(response.statusText);
            document.querySelector('#userComments').style.display = "block";
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);