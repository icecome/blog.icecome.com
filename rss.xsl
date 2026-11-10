<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8"/>
  <xsl:template match="/">
    <html>
      <head><title>RSS Feed</title></head>
      <body style="font-family:sans-serif;padding:40px;max-width:800px;margin:auto;background:#f5f6fa;">
        <h1 style="color:#1772B4"><xsl:value-of select="/rss/channel/title"/></h1>
        <p style="color:#666"><xsl:value-of select="/rss/channel/description"/></p>
        <hr style="margin:20px 0;border:none;border-top:1px solid #ddd;"/>
        <xsl:for-each select="/rss/channel/item">
          <div style="background:#fff;border-radius:10px;padding:20px;margin-bottom:16px;box-shadow:0 1px 4px rgba(0,0,0,0.06);">
            <h2 style="font-size:17px;margin-bottom:6px;"><a href="{link}" style="color:#2c3e50;text-decoration:none;"><xsl:value-of select="title"/></a></h2>
            <div style="font-size:12px;color:#aaa;margin-bottom:10px;"><xsl:value-of select="pubDate"/></div>
            <div style="font-size:14px;color:#555;line-height:1.7;"><xsl:value-of select="description" disable-output-escaping="yes"/></div>
            <a href="{link}" style="display:inline-block;margin-top:8px;font-size:13px;color:#1772B4;">阅读全文 &#8594;</a>
          </div>
        </xsl:for-each>
        <footer style="text-align:center;font-size:12px;color:#bbb;padding:20px 0;">Powered by Hugo &#183; Theme Nullego</footer>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
