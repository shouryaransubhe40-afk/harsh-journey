function bookNow(packageName) {
    let phone = "919130704353";
    let message = "Hi, I want to book the " + packageName;
    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}
