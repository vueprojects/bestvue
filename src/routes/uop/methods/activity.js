export default {
  data() {
    return {
      actList: [{
          id: 1,
          title: "温馨家庭",
          titleimg: require('./../assets/imgs/title_family.png'),
          intro: "东方明珠集团立志于打造家庭娱乐生态圈。无论是BesTV带来的视听盛宴还是东方购物的视频电商，都在提高人们家庭娱乐质量，让娱乐也变得更加高端化。",
          imgsrc: require('./../assets/imgs/act_bg1.png'),
          items: [{
              item_id: 1,
              item_title: "文末福利 | 据说新年全中国都被“上海7分钟”刷屏了……",
              item_imgsrc: require('./../assets/imgs/act/family_01.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3OTQ2NjAwMw==&mid=2653644570&idx=1&sn=3517c042ac58c29d1506e20776f416f2&chksm=846cdc66b31b557053ce85271938fa726f7f2adf0bbfa29c3e0c4414ac38c587ab500b9b3722&mpshare=1&scene=1&srcid=0321l7hQF9xlSSdB9lJPZO6x#rd"
            },
            {
              item_id: 2,
              item_title: "出发吧 | 灵魂和身体，必须有一个在路上",
              item_imgsrc: require('./../assets/imgs/act/family_02.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5Nzc2OTIwMQ==&mid=2651675766&idx=3&sn=cf35fec7c705634e2958455d26670a1b&chksm=bd2d06e88a5a8ffe6d708fd143dffd2f77cdd3721ca20a7fe533c8f9bc379584fb026b3eeccb&mpshare=1&scene=1&srcid=0321WW0yne1BveYAsfdhu3P7#rd"
            },
            {
              item_id: 3,
              item_title: "【送海岛游】百视通年度优质内容盘点，一路感恩一起前行",
              item_imgsrc: require('./../assets/imgs/act/family_03.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NDI1NTIwMA==&mid=2649858989&idx=1&sn=cdf6cf244c2849e07183861f8d6ee302&chksm=be8f9ba289f812b45c0dc121e785f4a7607f34bcef3af30ac3dfa5fd2220c0d328180383e435&mpshare=1&scene=1&srcid=0321DnVhiab8HdLDpXBWdJS4#rd"
            },
            {
              item_id: 4,
              item_title: "初春好时节,快来飞碟看电影",
              item_imgsrc: require('./../assets/imgs/act/family_04.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NzQ2NDk1Mw==&mid=2652417442&idx=1&sn=d8ccab7e9c384a8fa9a1a7d7d5d6d3bc&chksm=bd3593b48a421aa275e7cc6e6de59e3b309db42ada637a0ed053929a075da67a02447bfa12e8&mpshare=1&scene=1&srcid=0321yOivaGOzZvBUwFMiBJwP#rd"
            },
            {
              item_id: 5,
              item_title: "你在羡慕躺着看演出么，还有美食加美饮",
              item_imgsrc: require('./../assets/imgs/act/family_05.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NzQ2NDk1Mw==&mid=2652417442&idx=2&sn=1db73bfc6a88c634651b9e3d73a8a6af&chksm=bd3593b48a421aa2929173c542640c02110a49bab9cf48ac9a0236ec98cd3d47a999667bb21c&mpshare=1&scene=1&srcid=0321znOhVjJC4K1OAizJ7WiZ#rd"
            },
            {
              item_id: 6,
              item_title: "来看看！阿拉上海拧50年前就开始“吃咖啡”了，这才是真时髦、有腔调！",
              item_imgsrc: require('./../assets/imgs/act/family_06.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3OTQ2NjAwMw==&mid=2653644721&idx=3&sn=55dfb64ce165a2bdca2d5c98738b9891&chksm=846cdccdb31b55db5e5dd6ebcc523ad6147053d289a5b45230c443cd6f465b479ae265102a57&mpshare=1&scene=1&srcid=0321X2A2BMdvwkrLT5PVeCCX#rd"
            },
            {
              item_id: 7,
              item_title: "圣诞Party | 早鸟票开售啦！大餐,登高,VR过山车...欢乐尽享！",
              item_imgsrc: require('./../assets/imgs/act/family_07.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3OTQ2NjAwMw==&mid=2653644329&idx=1&sn=a36e3691c78fdc196dc52fccd4fa2ad1&chksm=846cdd55b31b5443a00939c26cdaa47fef9b7f2181765c8f2d2966a7f35f18d207003c9f7492&mpshare=1&scene=1&srcid=032137Kpo7TCMuqtUhyPATfW#rd"
            },
            {
              item_id: 8,
              item_title: "舌尖上的Mexico | 墨西哥美食文化周邀您来尝鲜！",
              item_imgsrc: require('./../assets/imgs/act/family_08.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3OTQ2NjAwMw==&mid=2653643819&idx=3&sn=193ea1cb7bd444443ee1775c93a0fe77&mpshare=1&scene=1&srcid=03217AOFfsMbdyhLYNZjUZWx#rd"
            },
            {
              item_id: 9,
              item_title: "十里桃花不如你 | 三生桃花不及卿",
              item_imgsrc: require('./../assets/imgs/act/family_09.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5Nzc2OTIwMQ==&mid=2651675827&idx=1&sn=962c6969b8f901fe2a7183abd47346f5&chksm=bd2d062d8a5a8f3bb2bc99908862e09dc1d921898e1d456842d696d0541ba89ee798744f7a41&mpshare=1&scene=1&srcid=0321Dzz3R59QOBFG9M4B1SXx#rd"
            },
            {
              item_id: 10,
              item_title: "周末去补课？不如带孩子来飞碟学知识！",
              item_imgsrc: require('./../assets/imgs/act/family_10.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NzQ2NDk1Mw==&mid=2652417526&idx=1&sn=654c2a3d466a1acf4a8cf91f9cb9fb52&chksm=bd3593e08a421af637fd41c4a4463c05e1bc9b8e039d3f417ea0924b5e1c50a0ae1c0b4ba788&mpshare=1&scene=1&srcid=03219nkdEUHFmeFfWPODihga#rd"
            },
            {
              item_id: 11,
              item_title: "【荧星启蒙】做樱花 玩太鼓 | 最合适孩子的日本旅行攻略",
              item_imgsrc: require('./../assets/imgs/act/family_11.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NDk2OTgyMA==&mid=2683511168&idx=7&sn=68e4f04c4368b2fcab0e00588a2770e4&chksm=bcf820338b8fa925571858ce9b1d3934f83ee34f57a1900635159c2b4c3b179744c63a78e8a7&mpshare=1&scene=1&srcid=0323Zd36FR1tm2Ivmc9My3VV#rd"
            },
            {
              item_id: 12,
              item_title: "你的洪荒之力已欠费，这里有5种充值方法",
              item_imgsrc: require('./../assets/imgs/act/family_12.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3MTQ5MTMyNA==&mid=2650481517&idx=1&sn=52a1730ab23b0dd3a26efc90291b81da&mpshare=1&scene=1&srcid=0118tgubYd4Wrot3MiArUkJk#rd"
            },
            {
              item_id: 13,
              item_title: "【直播】“模友们”模力嗨翻天",
              item_imgsrc: require('./../assets/imgs/act/family_13.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3MTQ5MTMyNA==&mid=2650482041&idx=1&sn=94158315cf9036c7a1830e3a0f7c68e0&chksm=87234eeab054c7fcad5c2445ce9afeb11b8f3920f3633eb3f91b16bb94f25ee676a5a8591058&mpshare=1&scene=1&srcid=0118oAYjfTZ5RTuFY7nbrSU2#rd"
            },
            {
              item_id: 14,
              item_title: "【18岁你好！】青春关键词之“感恩”",
              item_imgsrc: require('./../assets/imgs/act/family_14.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3MTQ5MTMyNA==&mid=2650482184&idx=1&sn=a0ae48afae8781b9b94f84a8c4445f10&chksm=87234d9bb054c48d35b88b1f23203cc6a4ee757c9f150d0b07054b73fff65ef1038c8c60fa5f&mpshare=1&scene=1&srcid=0323yMer3k8vFdTA9Mvgw016#rd"
            }
          ]
        },
        {
          id: 2,
          title: "娱乐生活",
          titleimg: require('./../assets/imgs/title_entertainment.png'),
          intro: "东方明珠集团着重推动生活娱乐、文化旅游产业的发展。以东方明珠为核心打造小陆家嘴文化、旅游、商贸集聚区，以梅赛德斯・奔驰文化中心为核心带动世博地区的文化旅游发展，以东方绿舟为核心建设上海的文化休闲旅游度假区，以此来丰富生活娱乐的内容、内涵和品质。",
          imgsrc: require('./../assets/imgs/act_bg2.png'),
          items: [{
              item_id: 1,
              item_title: "送福利！ | 带你见国民闺女关晓彤~魔都3月高颜值de樱花宝典！",
              item_imgsrc: require('./../assets/imgs/act/ent_01.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3OTQ2NjAwMw==&mid=2653644714&idx=1&sn=4cb27daf3e76e8460ae5b43e2fb9b82f&chksm=846cdcd6b31b55c008d88948aa3cc889ab5a57d982d3978d45a351ef9a1a49c0400992e1f0b8&mpshare=1&scene=1&srcid=03215E6nofDgoRlNiUBW19vd#rd"
            },
            {
              item_id: 2,
              item_title: "今夜“申花蓝”再现魔都 | 绿地申花登高誓师新赛季，蓝魔进!",
              item_imgsrc: require('./../assets/imgs/act/ent_02.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3OTQ2NjAwMw==&mid=2653644694&idx=1&sn=0cab15dbcb5da14c67b2e669d73da6e8&chksm=846cdceab31b55fc3e8bee06901d831f9ca091feba0377922ea014f7123308d58f6ace241722&mpshare=1&scene=1&srcid=0321IyFqoUbmM6FVl6exUJ64#rd"
            },
            {
              item_id: 3,
              item_title: "魔都最in情人节攻略：在城市的中心呼唤爱！文末福利！",
              item_imgsrc: require('./../assets/imgs/act/ent_03.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3OTQ2NjAwMw==&mid=2653644630&idx=1&sn=7291dad899bbea05db3f3d121ee2f391&chksm=846cdc2ab31b553cd83ffa4ce36ed3cbe518e2bcff6dbc4da66b1436ca9556ad36c8cd863ec9&mpshare=1&scene=1&srcid=03210BZqCWDXq2vq827vr2ks#rd"
            },
            {
              item_id: 4,
              item_title: "精彩回顾 | 元旦登高，内附证书&照片下载方法",
              item_imgsrc: require('./../assets/imgs/act/ent_04.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3OTQ2NjAwMw==&mid=2653644487&idx=3&sn=07f215bf55689b8a48b7b6ed1b2d6b02&chksm=846cddbbb31b54adf7b42ea96d57ba8bf3600bf7b390b1d971b6b9397716ec653d35b142b0b9&mpshare=1&scene=1&srcid=0321Cl5mPby18hU4cdghzNZv#rd"
            },
            {
              item_id: 5,
              item_title: "免费报名 | 在魔都259米悬空做瑜伽是什么体验？跟lululemon一起尽情热汗！",
              item_imgsrc: require('./../assets/imgs/act/ent_05.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3OTQ2NjAwMw==&mid=2653644387&idx=2&sn=f5a27ebbefed62aeabdbbaba9de9c841&chksm=846cdd1fb31b540907e234ebc91c3a3f775cf7837f99ef5a2ac2229eb1423f930a86fd06635e&mpshare=1&scene=1&srcid=0321Dwdldl9XteM66CJAhmoS#rd"
            },
            {
              item_id: 6,
              item_title: "免费报名 | 什么？睡男神？一起去彭于晏家住吧！",
              item_imgsrc: require('./../assets/imgs/act/ent_06.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3OTQ2NjAwMw==&mid=2653644269&idx=4&sn=facc2a4bfc3c2e5709af30dd59e54e03&chksm=846cde91b31b5787290afad8929c7c3947d2ae5bbe8fba6d20b02d20e6d555e264dd896e0638&mpshare=1&scene=1&srcid=03215w2Zmks8n5nt5R3msSR9#rd"
            },
            {
              item_id: 7,
              item_title: "西湖龙井的奥秘 | 东方购物源头探秘第一站",
              item_imgsrc: require('./../assets/imgs/act/ent_07.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5Nzc2OTIwMQ==&mid=2651675901&idx=1&sn=4e5409edd9cfca07a67db721c57539eb&chksm=bd2d06638a5a8f75f92cfc598c5c21e74012b00e452480a1d284a8e37c27ef9662d78f4cfc85&mpshare=1&scene=1&srcid=03217Souxp7li1c6I9nGYylj#rd"
            },
            {
              item_id: 8,
              item_title: "话题互动 | 那些年收到の情书",
              item_imgsrc: require('./../assets/imgs/act/ent_08.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5Nzc2OTIwMQ==&mid=2651675781&idx=1&sn=f0d539fca6c447f64a43e00dc8376c35&chksm=bd2d061b8a5a8f0de67df25ff8107503e66f7050d1317bbe570490c4fd942fba55851a459dfc&mpshare=1&scene=1&srcid=0321NdbmQaz1ZIRoXZ3CTgbT#rd"
            },
            {
              item_id: 9,
              item_title: "《越野千里》明星见面会 | 邀请你来参加",
              item_imgsrc: require('./../assets/imgs/act/ent_09.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5MTM1MjczNQ==&mid=2652084698&idx=6&sn=e39c0ea6e11ca2aebb51a09361c72611&chksm=bd51eb2a8a26623c829f91f6f6c09538abe5a1e9004c00f27a51875486686b5fe554450c8ae4&mpshare=1&scene=1&srcid=0321Kz38sei4Smc5PKZpo99S#rd"
            },
            {
              item_id: 10,
              item_title: "今晚18:30直播 | 上海时装周东方购物旗下女装品牌秀",
              item_imgsrc: require('./../assets/imgs/act/ent_10.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5MTM1MjczNQ==&mid=2652084559&idx=1&sn=4d5fb914272dfdc7eacc895704f8036f&chksm=bd51ebbf8a2662a94eda6c55b99e7a6db95db6bcf3d8e8d9bbd9a25bf70b282c2de0876d836f&mpshare=1&scene=1&srcid=0321eqPJZD6W0GIsJKDBs4qB#rd"
            },
            {
              item_id: 11,
              item_title: "权力的游戏 | 大战将袭，凛冬已至",
              item_imgsrc: require('./../assets/imgs/act/ent_11.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NDI1NTIwMA==&mid=2649859340&idx=1&sn=9766f0c3d7c196e0c40baab949589734&chksm=be8f9d0389f814156fc2a42052e7be4182e38c9d292ff727ca17474cf2ea8dbd4e91df482aaa&mpshare=1&scene=1&srcid=0321LSGbmTr2HImCUPp6o1Hq#rd"
            },
            {
              item_id: 12,
              item_title: "英雄迟暮，泪别狼叔！百视通邀您共同回忆《金刚狼》系列",
              item_imgsrc: require('./../assets/imgs/act/ent_12.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NDI1NTIwMA==&mid=2649859304&idx=1&sn=d4f3164743193de334b264f8e36d7839&chksm=be8f9ce789f815f13cce407970a0ac012f2faa2ef5cf649ca79a0a93c98b0ace07991029778e&mpshare=1&scene=1&srcid=0321qwiNqa5yXXmrmMsA1Ynx#rd"
            },
            {
              item_id: 13,
              item_title: "奥斯卡今日闹出最大乌龙，而这两部提名影片一点不输最佳大奖",
              item_imgsrc: require('./../assets/imgs/act/ent_13.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NDI1NTIwMA==&mid=2649859264&idx=1&sn=c74e7f46a12605798ea3c7fbfab130fa&chksm=be8f9ccf89f815d953076b25f08226b3f31dac2a0e9e7cf48e43d130a848147a68ab988eab13&mpshare=1&scene=1&srcid=0321rb756YwQowB7UiV1tnag#rd"
            },
            {
              item_id: 14,
              item_title: "【送票】抱歉，他们并不会成为下一个Coldplay或是U2——不追随，才是独立摇滚的灵魂",
              item_imgsrc: require('./../assets/imgs/act/ent_14.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NDI1NTIwMA==&mid=2649859197&idx=1&sn=25e3dd337ef24bf9edc09501815c0518&chksm=be8f9c7289f8156447767ca20ce9eedfc1374619bc243abec9cccf681fe78104d841ee2b48a9&mpshare=1&scene=1&srcid=0321CTGIKSsGRbvp5xtpXr40#rd"
            },
            {
              item_id: 15,
              item_title: "【送票】2016/17深圳跨年迷笛音乐节全阵容时间表公布！",
              item_imgsrc: require('./../assets/imgs/act/ent_15.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NDI1NTIwMA==&mid=2649858813&idx=1&sn=33ef059267506af72d1e63d2b8edd94d&chksm=be8f9af289f813e45fb1f35a7606f96857148311a43e9b420fecb802445353264a8fa2e8719d&mpshare=1&scene=1&srcid=032120kikWSLYMnFMWkQoUh1#rd"
            },
            {
              item_id: 16,
              item_title: "【有福利】年度大赏召集令！SNH48再度来袭。",
              item_imgsrc: require('./../assets/imgs/act/ent_16.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NzQ2NDk1Mw==&mid=2652416758&idx=2&sn=5046bc4a3b013d363580b7409b4c9d14&chksm=bd3594e08a421df6f35f5ca479b5ffa564a59b9679da160f51f99d8e54276167228a084a144c&mpshare=1&scene=1&srcid=0118MP0qJ7pd7MBOKLrQjFb6#rd"
            },
            {
              item_id: 17,
              item_title: "【大福利】周董又回来了！这次还带了蔡依林、陈奕迅和五月天！",
              item_imgsrc: require('./../assets/imgs/act/ent_17.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NzQ2NDk1Mw==&mid=2652416396&idx=1&sn=05dbb636397fbed51da50cea663ab506&chksm=bd35979a8a421e8c3a73b3884acc4d14b06891b890056ef286a3221e19f87a14dd59af0f69e5&mpshare=1&scene=1&srcid=0118VepJfFbsON8kn6mnS0xk#rd"
            },
            {
              item_id: 18,
              item_title: "【本周福利🎁】除了上海马拉松，还有格莱美“监票长”要来噢",
              item_imgsrc: require('./../assets/imgs/act/ent_18.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NzQ2NDk1Mw==&mid=2652415946&idx=1&sn=165a8ca23156c9bc1a1f001bc60c4ae0&chksm=bd3599dc8a4210cab51671de68b38106d04b52d9dcfe8615643b1332f0868a299ab44868ffd0&mpshare=1&scene=1&srcid=0118zVoalI1Dya0kQkFUZ7nR#rd"
            },
            {
              item_id: 19,
              item_title: "春风十里，不如杯中有你",
              item_imgsrc: require('./../assets/imgs/act/ent_19.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3MTQ5MTMyNA==&mid=2650482411&idx=1&sn=2fd3768dd40f519faa9a34e072f08360&chksm=87234d78b054c46e5f5c943428620c8e53e26deb38f806e1d9ae500d6331b89f3fafdf082498&mpshare=1&scene=1&srcid=0323kCVShcJMRU9QXfzKsfkD#rd"
            },
            {
              item_id: 20,
              item_title: "【运动会】全民健身一小步，健康中国一大步",
              item_imgsrc: require('./../assets/imgs/act/ent_20.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3MTQ5MTMyNA==&mid=2650482112&idx=1&sn=453a94e85e9474214bf1d20bceee690d&chksm=87234e53b054c7456e77f116701976b79b2860b091ce2ee90d18f3df50ffba7bba8fc4681d87&mpshare=1&scene=1&srcid=0323e6mRklMJFuH75PZkWyxN#rd"
            }
          ]
        },
        {
          id: 3,
          title: "亲子时光",
          titleimg: require('./../assets/imgs/title_kids.png'),
          intro: "东方明珠集团注重建设高品质的线上线下亲子互娱平台。以”用艺术点亮梦想“的小荧星，大型亲少年户外拓展基地东方绿舟，全国领先的少儿教育活动平台哈哈少儿，搭建起儿童教育生态圈，满足新生代家庭对少儿教育的个性化、多元化的需求。",
          imgsrc: require('./../assets/imgs/act_bg3.png'),
          items: [{
              item_id: 1,
              item_title: "“哈哈生日会”有吃又有玩，还有小宝哥哥为你庆生！仅限30组家庭",
              item_imgsrc: require('./../assets/imgs/act/kid_01.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3MDAwODEyNw==&mid=2655465987&idx=1&sn=19445d1d7159d6f6514b6813644ae0d6&chksm=8570fe53b20777455cb7ef56753da547c42346913405591259bf6f55b43afbe36e1d2fe2a476&mpshare=1&scene=1&srcid=0323eusw0YAlAwROXMgbb2P9#rd"
            },
            {
              item_id: 2,
              item_title: "家长担心的“怪蜀黍”问题都在这里，这13道“保命题”必须教会孩子！",
              item_imgsrc: require('./../assets/imgs/act/kid_02.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3MDAwODEyNw==&mid=2655465833&idx=1&sn=89e1e70c12b0799ffd74685844dbaff6&chksm=8570fd39b207742fd5e05cabee12b27db529cf7d65c4085ffc2b9d1cc8a166fb260075b5bd7f&mpshare=1&scene=1&srcid=0323NNGHNdbUKcLcNZefw0cE#rd"
            },
            {
              item_id: 3,
              item_title: "张梓琳晒娃，章子怡躺枪！网友又开始讨论女儿长相真的随爸爸吗？",
              item_imgsrc: require('./../assets/imgs/act/kid_03.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3MDAwODEyNw==&mid=2655465814&idx=1&sn=ce6974e4a25b55a8de2e265f1d4e5efe&chksm=8570fd06b2077410c1a830350adaf3070643f2e09f6d321addfe807dc3524cdc59d0c503f13a&mpshare=1&scene=1&srcid=0323aW6ovLrCa0DyuuyhXsOX#rd"
            },
            {
              item_id: 4,
              item_title: "春天在哪里？跟着“哈哈”去中福会托儿所寻找答案，遇见春天！",
              item_imgsrc: require('./../assets/imgs/act/kid_04.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3MDAwODEyNw==&mid=2655465704&idx=1&sn=4c9360b9de35abe6a3dfa2371c3cf6e9&chksm=8570fcb8b20775ae21306c35252fe15ea45f469f3863a0a5a1cadcedc81bc7788887a3104387&mpshare=1&scene=1&srcid=0323PDkgtUoS0V24dJcZIti1#rd"
            },
            {
              item_id: 5,
              item_title: "贾静雯怀第三胎全程少女模样，二婚大龄的她，为何越来越女神？",
              item_imgsrc: require('./../assets/imgs/act/kid_05.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3MDAwODEyNw==&mid=2655465613&idx=1&sn=4c7e55f8b55118e5e7f1f638a076c751&chksm=8570fcddb20775cbd3a7dcc85506d1db07ae2b6fa1f612b0399b833c35dbf6c9525d3f54008c&mpshare=1&scene=1&srcid=0323JoOdxQX7IWvuL6KzCNnh#rd"
            },
            {
              item_id: 6,
              item_title: "妈妈在商场上个厕所弄丢了3岁娃，幸好娃机智！带异性孩子解手该怎么做？",
              item_imgsrc: require('./../assets/imgs/act/kid_06.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3MDAwODEyNw==&mid=2655465527&idx=1&sn=308533592f7d17f787e52f89d53abc38&chksm=8570fc67b2077571a72dd64f00eca17788ea86988712e39d71a5984c926b2977e7bef7cfeb60&mpshare=1&scene=1&srcid=0323SyOkV5p3tG1tvQRRWYtS#rd"
            },
            {
              item_id: 7,
              item_title: "一票难求的华东地区少儿春晚录制在即，小编替你藏了10张票！",
              item_imgsrc: require('./../assets/imgs/act/kid_07.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3MDAwODEyNw==&mid=2655464579&idx=1&sn=53602bd1e1fc8facda09ed528d7d9d7c&chksm=8570e0d3b20769c5577536676a0dcae9e58ec7ab61c769b14bc560c3c681e09cc939026060c9&mpshare=1&scene=1&srcid=0323gEBzRvtuh2Smnp4FwB8k#rd"
            },
            {
              item_id: 8,
              item_title: "重磅 | 曾被认为“无用”的艺术将成为基础教育",
              item_imgsrc: require('./../assets/imgs/act/kid_08.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NDk2OTgyMA==&mid=2683513627&idx=1&sn=fa90a056b4980489df10c16a629c2050&chksm=bcf82aa88b8fa3be6e204024a4c630ea6412848a066214ee3136570475769ad96aa73b2f3f42&mpshare=1&scene=1&srcid=0323FF2yuWs4m15bAiyzOVl2#rd"
            },
            {
              item_id: 9,
              item_title: "【荧星招募】错过这场约会 你可能就过了一个假的春天",
              item_imgsrc: require('./../assets/imgs/act/kid_09.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NDk2OTgyMA==&mid=2683513550&idx=1&sn=0c41e032919ad0a3e28698ba2ed903d0&chksm=bcf82b7d8b8fa26bf5a9e1c5d92695199c5d44ee85e99b4d237549538986dd865b3e1e098a0f&mpshare=1&scene=1&srcid=03231U9ukWg1gzPlEpNT44Id#rd"
            },
            {
              item_id: 10,
              item_title: "【荧星招募】晒娃新姿势 👶“生日宝贝”征集令",
              item_imgsrc: require('./../assets/imgs/act/kid_10.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NDk2OTgyMA==&mid=2683513550&idx=7&sn=2860112fc9bd0e28e262f62f60d3bf3d&chksm=bcf82b7d8b8fa26bcfb55649e2f129553e84d874f3c71b1f7db717516f084e3716d258f54adf&mpshare=1&scene=1&srcid=0323xVoNb9z2J8uV9R4F6ioT#rd"
            },
            {
              item_id: 11,
              item_title: "央视春晚四次亮相 全球亿万观众共赏荧星风采",
              item_imgsrc: require('./../assets/imgs/act/kid_11.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NDk2OTgyMA==&mid=2683513227&idx=1&sn=174ad91f05498b1a77cb9ce3f1d2019e&chksm=bcf828388b8fa12e6407ba8e7896c75e5da89d424c7b5a167de386c12d1c6ae88a44958a9991&mpshare=1&scene=1&srcid=0323wcBvwaTJeQ5oxQHVE1CV#rd"
            },
            {
              item_id: 12,
              item_title: "【大咖聊育儿】林海首谈育儿经 暖男爸爸满满都是爱",
              item_imgsrc: require('./../assets/imgs/act/kid_12.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NDk2OTgyMA==&mid=2683512110&idx=1&sn=68c7d133f65bd28d2a191d94d6e8b0a4&chksm=bcf8249d8b8fad8bf3b2feb2862cfd39cc36dd24d8bb61eb405cb0c2cb1d17c0a8fd49fb39ad&mpshare=1&scene=1&srcid=0323bYZEwm0lqa88PdDJ6w9O#rd"
            },
            {
              item_id: 13,
              item_title: "【荧星启蒙】狂野非洲 | 萌娃与动物之间的对话",
              item_imgsrc: require('./../assets/imgs/act/kid_13.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NDk2OTgyMA==&mid=2683511735&idx=5&sn=1ca1921eedec8f66486b4f07714bf52b&chksm=bcf822048b8fab12c854d9e0e8b239b65f7967f5a474cb28edf2bdf4004bdf022a4ed50ce7e4&mpshare=1&scene=1&srcid=0323RnKsUFs1ztc7FzONhlrK#rd"
            },
            {
              item_id: 14,
              item_title: "在育儿上，特朗普其实特靠谱！",
              item_imgsrc: require('./../assets/imgs/act/kid_14.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NDk2OTgyMA==&mid=2683511612&idx=7&sn=3f4c3ab5eb9dcb30bde57466301c73e0&chksm=bcf8228f8b8fab99e198282ce25d8671b7a68c358439edc33e3edd48a361566d231869834d3e&mpshare=1&scene=1&srcid=0323dKTHqToR2SQzAxSq8IwL#rd"
            },
            {
              item_id: 15,
              item_title: "【荧星启蒙】做樱花 玩太鼓 | 最合适孩子的日本旅行攻略",
              item_imgsrc: require('./../assets/imgs/act/kid_15.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MjM5NDk2OTgyMA==&mid=2683511168&idx=7&sn=68e4f04c4368b2fcab0e00588a2770e4&chksm=bcf820338b8fa925571858ce9b1d3934f83ee34f57a1900635159c2b4c3b179744c63a78e8a7&mpshare=1&scene=1&srcid=0323Zd36FR1tm2Ivmc9My3VV#rd"
            },
            {
              item_id: 16,
              item_title: "东方绿舟元旦亲子欢乐跑，与您共同开启充满机遇（鸡鱼）的2017！",
              item_imgsrc: require('./../assets/imgs/act/kid_16.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3MTQ5MTMyNA==&mid=2650482326&idx=1&sn=49323f9bba78d5517b58563048f878db&chksm=87234d05b054c413f03b280efea0045b1d61c70e56107804c3b56034316163108a6958023c8e&mpshare=1&scene=1&srcid=0323FkcknubPEEbgFMwnBoud#rd"
            },
            {
              item_id: 17,
              item_title: "【开学】阳光灿烂的日子里，我们开营啦！",
              item_imgsrc: require('./../assets/imgs/act/kid_17.png'),
              item_link: "http://mp.weixin.qq.com/s?__biz=MzA3MTQ5MTMyNA==&mid=2650482379&idx=1&sn=3aad2859450fcb8694a0290fffce7618&chksm=87234d58b054c44e7168ef11edf0cc270857d909dec638d22f174e280fd7bef180ee7097e4ab&mpshare=1&scene=1&srcid=0323NVTTV58s5gl8D4XS5ON2#rd"
            }
          ]
        }
      ]
    }  
  },
  mounted() {
    console.log('activity')
  }
}
