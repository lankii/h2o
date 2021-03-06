const menus = (user) => {
  var items = []
  if (user.uid) {
    // sign in?
    items.push({
      icon: "user",
      label: "nut.self.title",
      key: "personal",
      items: [
        {
          label: "nut.users.logs.title",
          key: "/users/logs"
        }, {
          label: "nut.users.profile.title",
          key: "/users/profile"
        }, {
          label: "nut.users.change-password.title",
          key: "/users/change-password"
        }, {
          label: "nut.attachments.index.title",
          key: "/attachments"
        }
      ]
    })

    var forum = {
      icon: "tablet",
      label: "forum.dashboard.title",
      key: "forum",
      items: [
        {
          label: "forum.articles.index.title",
          key: "/forum/articles"
        }, {
          label: "forum.comments.index.title",
          key: "/forum/comments"
        }
      ]
    }

    var reading = {
      icon: "book",
      label: "reading.dashboard.title",
      key: "reading",
      items: [
        {
          label: "reading.books.index.title",
          key: "/reading/books"
        }
      ]
    }

    if (user.admin) {
      // administrator?
      forum.items.push({label: "forum.tags.index.title", key: "/forum/tags"})
      reading.items.push({label: "reading.notes.index.title", key: "/reading/notes"})
      items.push({
        icon: "setting",
        label: "nut.settings.title",
        key: "settings",
        items: [
          {
            label: "nut.admin.site.status.title",
            key: "/admin/site/status"
          }, {
            label: "nut.admin.site.info.title",
            key: "/admin/site/info"
          }, {
            label: "nut.admin.site.author.title",
            key: "/admin/site/author"
          }, {
            label: "nut.admin.site.seo.title",
            key: "/admin/site/seo"
          }, {
            label: "nut.admin.site.smtp.title",
            key: "/admin/site/smtp"
          }, {
            label: "nut.admin.site.donate.title",
            key: "/admin/site/donate"
          }, {
            label: "nut.admin.site.home.title",
            key: "/admin/site/home"
          }, {
            label: "nut.admin.links.index.title",
            key: "/admin/links"
          }, {
            label: "nut.admin.cards.index.title",
            key: "/admin/cards"
          }, {
            label: "nut.admin.locales.index.title",
            key: "/admin/locales"
          }, {
            label: "nut.admin.friend-links.index.title",
            key: "/admin/friend-links"
          }, {
            label: "nut.admin.leave-words.index.title",
            key: "/admin/leave-words"
          }, {
            label: "nut.admin.users.index.title",
            key: "/admin/users"
          }
        ]
      })
    }
    items.push(forum)
    items.push(reading)
    items.push({
      icon: "notification",
      label: "survey.dashboard.title",
      key: "survey",
      items: [
        {
          label: "survey.forms.index.title",
          key: "/survey/forms"
        }
      ]
    })
    items.push({icon: "shopping-cart", label: "shop.dashboard.title", key: "shop", items: []})

    items.push({icon: "logout", label: "nut.users.sign-out.title", key: "/users/sign-out"})
  } else {
    // non sign in?
    items.push({icon: "user", label: "nut.users.sign-in.title", key: "/users/sign-in"})
    items.push({icon: "user-add", label: "nut.users.sign-up.title", key: "/users/sign-up"})
    items.push({icon: "key", label: "nut.users.forgot-password.title", key: "/users/forgot-password"})
    items.push({icon: "check-circle-o", label: "nut.users.confirm.title", key: "/users/confirm"})
    items.push({icon: "unlock", label: "nut.users.unlock.title", key: "/users/unlock"})
    items.push({icon: "message", label: "nut.leave-words.new.title", key: "/leave-words/new"})
  }

  return items
}

export default menus
