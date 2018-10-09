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
# lang only
```
cd /usr/local/directadmin/data/skins/evolution/lang
##zh_cn
wget https://raw.githubusercontent.com/ppopcn/evolution/master/lang/cn.po
##zh_tw
https://raw.githubusercontent.com/ppopcn/evolution/master/lang/zh_Hant_HK.po
cd /usr/local/directadmin/data/skins
chown -R diradmin:diradmin evolution
```