package nut

import (
	"github.com/gin-gonic/gin"
	"github.com/kapmahc/h2o/web"
)

func (p *Plugin) getHome(c *gin.Context) {
	// carousel off-canvas
	theme := c.Query("theme")
	if theme == "" {
		theme = "off-canvas"
	}
	p.Layout.HTML("nut/home/"+theme, func(string, *gin.Context) (gin.H, error) {
		return gin.H{}, nil
	})(c)
}

func (p *Plugin) getLocales(_ string, c *gin.Context) (interface{}, error) {
	items, err := p.I18n.All(c.Param("lang"))
	return items, err
}

func (p *Plugin) getSiteInfo(l string, c *gin.Context) (interface{}, error) {

	site := gin.H{}
	for _, k := range []string{"title", "subhead", "keywords", "description", "copyright"} {
		site[k] = p.I18n.T(l, "site.title")
	}

	author := gin.H{}
	for _, k := range []string{"name", "email"} {
		var v string
		p.Settings.Get(p.DB, "site.author."+k, &v)
		author[k] = v
	}
	site["author"] = author

	langs, err := p.I18n.Languages(p.DB)
	if err != nil {
		return nil, err
	}

	site[web.LOCALE] = l
	site["languages"] = langs

	return site, nil
}
