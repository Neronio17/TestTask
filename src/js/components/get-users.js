
export class GetUsers {
    constructor() {
        this.btnGet = $('.btn_getUsers');
        this.itemsParent = $('.row');
        this.statElem = $('.stat');
        this.sendRequest();
    }

    sendRequest() {
        this.btnGet.on('click', () => this.clickEvent());
    }

    clickEvent() {
        this.getJson();
        this.btnGet
            .prop('disabled', true)
            .addClass('btn-disabled');
    }

    getJson() {
        $.ajax({
           type: 'GET',
           cache: false,
           url: 'http://gingerbit.services/generated.json',
           success: (response) => {
               this.arrayIterations(response);
               this.appendStat(response);
           }
        });
    }

    arrayIterations(resp) {
        resp.forEach((item) => {
            this.appendUsers(item);
            console.log(item);
        });
    }

    appendUsers(users) {
        const userName = '<h3>' + users.name + '</h3>';
        const userPhoto = '<div class="image-block"><img src='+ users.photo +' + alt="Image Description"></div>';
        const userBlock = '<div class="user-block">' + userName + userPhoto + '</div>';

        this.itemsParent.append('<div class="col">' + userBlock + '</div>');
    }

    appendStat(value) {
        const usersValue = value.length;
        const date = new Date();
        const dateElem = '<span>Дата последнего запроса: ' + date + '</span>';
        const usersValueElem = '<span>Колличество пользователей равно: ' + usersValue + '</span>';

        this.statElem.append(dateElem, usersValueElem);
    }
}