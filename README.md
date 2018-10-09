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
##zh_cn
wget https://raw.githubusercontent.com/ppopcn/evolution/master/lang/cn.po
##zh_tw
wget https://raw.githubusercontent.com/ppopcn/evolution/master/lang/zh_tw.po
chown -R diradmin:diradmin ./*
```