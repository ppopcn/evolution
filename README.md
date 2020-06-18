# evolution
```
build 5/3/2018
```
=======
```
cd /usr/local/directadmin/data/skins/

wget https://github.com/ppopcn/evolution/archive/master.zip

unzip master.zip

mv evolution-master evolution

chown -R diradmin:diradmin evolution

rm -f master.zip
```
=======
# Evolution 简体中文和繁体中文语言文件
```
cd /usr/local/directadmin/data/skins/evolution/lang
##zh_cn(简中)
wget https://raw.githubusercontent.com/ppopcn/evolution/master/lang/zh-cn.po
##zh_tw(繁中)
wget https://raw.githubusercontent.com/ppopcn/evolution/master/lang/zh_tw.po
chown -R diradmin:diradmin ./*
```

# 高端大气上档次的login page
```
cd /usr/local/directadmin/data/templates/custom
wget https://raw.githubusercontent.com/ppopcn/evolution/master/neworld_login/login.html
chown -R diradmin:diradmin ./login.html
cd /usr/local/directadmin/data/templates/login_images
wget https://raw.githubusercontent.com/ppopcn/evolution/master/neworld_login/style.css
wget https://raw.githubusercontent.com/ppopcn/evolution/master/neworld_login/semantic.min.css
chown -R diradmin:diradmin ./*
```
