/***********************************************
 > 应用名称：微博&微博国际版净化脚本
 > 脚本作者：@sve1r
 > 更新时间：2025-09-16
 > 通知频道：https://t.me/sve1r
 > 脚本声明：若有侵犯原作者权利，请联系删除
 ***********************************************/


const version = 'V3.0.0';
const author = 'sve1r';
const debugMode = false;

// 微博详情页菜单配置
const menusConfig = {
    creatortypeask: false, // 转发任务
    mblog_menus_apeal: true, // 申诉
    mblog_menus_avatar_widget: false, // 用此头像挂件
    mblog_menus_bullet_shield: true, // 屏蔽弹幕
    mblog_menus_card_bg: false, // 用此卡片背景
    mblog_menus_comment_manager: true, // 评论管理
    mblog_menus_copy_url: true, // 复制链接
    mblog_menus_custom: false, // 寄微博
    mblog_menus_delete: true, // 删除
    mblog_menus_edit: true, // 编辑
    mblog_menus_edit_history: true, // 编辑记录
    mblog_menus_edit_video: true, // 编辑视频
    mblog_menus_favorite: true, // 收藏
    mblog_menus_follow: true, // 关注
    mblog_menus_home: false, // 返回首页
    mblog_menus_long_picture: true, // 生成长图
    mblog_menus_modify_visible: true, // 设置分享范围
    mblog_menus_novelty: false, // 新鲜事投稿
    mblog_menus_open_reward: false, // 赞赏
    mblog_menus_popularize: false, // 推广
    mblog_menus_promote: false, // 推广
    mblog_menus_report: true, // 投诉
    mblog_menus_shield: true, // 屏蔽
    mblog_menus_sticking: true, // 置顶
    mblog_menus_video_feedback: false, // 播放反馈
    mblog_menus_video_later: false // 可能是稍后再看
};

/*********************************脚本入口*********************************/
let url = $request.url;
// 响应异常 则返回空数据
if (!$response) $done({});
// 返回响应为null，则返回空数据
if (!$response.body) $done({});
let body = $response.body;

let formatUrl = url.split("?")[0];
log(`🧣 Weibo 去广告 v3 开始处理`);
log(`ℹ️ Url: ${formatUrl}`);

try {
    if (url.includes("/interface/sdk/sdkad.php")) {
        handleSdkAd();
    } else {
        // 安全解析 JSON 数据
        let content = body.match(/\{.*}/);
        if (!content) {
            throw new Error("响应体中没有匹配到 JSON 数据");
        }
        handleNoneSdkAd(content);
    }

} catch (e) {
    log(`❌ 脚本处理出错`);
    log(`🔴 错误详情: ${e.message}`);
}
log(`🚩 执行结束`);
$done({body});

/*********************************处理方法*********************************/

/**
 * 处理 SDK 开屏广告
 */
function handleSdkAd() {
    log(`ℹ️ 脚本处理 SDK 开屏广告`);
    let obj = JSON.parse(body.substring(0, body.length - 2));
    if (obj?.needlocation) {
        obj.needlocation = false;
    }
    if (obj?.show_push_splash_ad) {
        obj.show_push_splash_ad = false;
    }
    if (obj?.background_delay_display_time) {
        obj.background_delay_display_time = 31536000; // 60 * 60 * 24 * 365 = 31536000
    }
    if (obj?.lastAdShow_delay_display_time) {
        obj.lastAdShow_delay_display_time = 31536000;
    }
    if (obj?.realtime_ad_video_stall_time) {
        obj.realtime_ad_video_stall_time = 0;
    }
    if (obj?.realtime_ad_timeout_duration) {
        obj.realtime_ad_timeout_duration = 0;
    }
    if (obj?.ads?.length > 0) {
        for (let item of obj.ads) {
            item.displaytime = 0;
            item.displayintervel = 31536000;
            item.allowdaydisplaynum = 0;
            item.begintime = "2040-01-01 00:00:00";
            item.endtime = "2040-01-01 23:59:59";
        }
    }
    body = JSON.stringify(obj) + "OK";
    log(`🏁 处理结束...`);
}

/**
 * 处理非 SDK 广告
 */
function handleNoneSdkAd(obj) {
    switch (true) {
        case url.includes("/2/cardlist"):
            handleCardList(obj);    //卡片列表
            break;
        case url.includes("/2/checkin/show"):
            handleCheckinShow(obj); //签到显示
            break;
        case url.includes("/2/client/publisher_list"):
            handleIndexPageButton(obj); // 首页右上角按钮
            break;
        case url.includes("/2/comments/build_comments"):
            handleBuildComments(obj);   //评论区构建
            break;
        case url.includes("/2/container/asyn"):
            handleContainerAsyn(obj);   //异步容器
            break;
        case url.includes("/2/direct_messages/user_list"):
            handleDirectMessages(obj);
            break;
        case url.includes("/2/flowlist"):
            handleFlowList(obj);
            break;
        case url.includes("/2/flowpage"):
            handleFlowPage(obj);
            break;
        case url.includes("/2/groups/allgroups/v2"):
            handleGroupsAllGroups(obj);
            break;
        case url.includes("/2/messageflow/notice"):
            handleMessageFlow(obj);
            break;
        case url.includes("/2/page"):
            handlePage(obj);
            break;
        case url.includes("/2/profile/container_timeline"):
            handleProfileContainerTimeline(obj);
            break;
        case url.includes("/2/profile/dealatt") || url.includes("/2/friendships/"):
            handleProfileDealAtt(obj);
            break;
        case url.includes("/2/profile/me"):
            handleProfileMe(obj);
            break;
        case url.includes("/2/profile/statuses/tab"):
            handleProfileStatusesTab(obj);
            break;
        case url.includes("/2/profile/userinfo"):
            handleProfileUserInfo(obj);
            break;
        case url.includes("/2/push/active"):
            handlePushActive(obj);
            break;
        case url.includes("/2/search/"):
            handleSearch(obj);
            break;
        case url.includes("/2/searchall"):
            handleSearchAll(obj);
            break;
        case url.includes("/2/shproxy/chaohua/discovery/searchactive"):
            handleChaohuaSearch(obj);
            break;
        case url.includes("/2/statuses/container_detail?"):
            handleContainerDetail(obj);
            break;
        case url.includes("/2/statuses/container_detail_comment"):
            handleContainerDetailComment(obj);
            break;
        case url.includes("/2/statuses/container_timeline_hot") || url.includes("/2/statuses/unread_hot_timeline"):
            handleContainerTimelineHot(obj);
            break;
        case url.includes("/2/statuses/container_timeline?") || url.includes("/2/statuses/container_timeline_unread"):
            handleContainerTimeline(obj);
            break;
        case url.includes("/2/statuses/container_timeline_topic"):
            handleContainerTopicTimeline(obj);
            break;
        case url.includes("/2/statuses/extend"):
            handleContainerExtend(obj);
            break;
        case url.includes("/2/statuses/repost_timeline"):
            handleRepostTimeline(obj);
            break;
        case url.includes("/2/statuses/show"):
            handleStatusesShow(obj);
            break;
        case url.includes("/2/video/full_screen_stream"):
            handleFullScreenVideoStream(obj); //全屏视频流
            break;
        case url.includes("/2/video/tiny_stream_mid_detail"):
            handleVideoStreamDetail(obj); //视频中的详情
            break;
        case url.includes("/2/video/tiny_stream_video_list"):
            handleVideoStreamList(obj);
            break;
        case url.includes("/2/!/huati/discovery_home_bottom_channels"):
            handleTopicDiscovery(obj); //话题发现页面
            break;
        case url.includes("/aj/appicon/list"):
            handleAppIconList(obj); //app 图标
            break;
        case url.includes("/v1/ad/preload") || url.includes("/v2/ad/preload"):
            handleAdPreload(obj); //预加载广告
            break;
        case url.includes("/wbapplua/wbpullad.lua") || url.includes("/preload/get_ad"):
            handleWbPullAd(obj);    //开屏广告处理
            break;
        default:
            log("💔 未能匹配对应的处理方法");
            break;
    }
    body = JSON.stringify(obj);
}

/**
 * 处理卡片列表
 * @param obj
 */
function handleCardList(obj) {
    if (obj?.top) {
        delete obj.top; // 发现页 趋势 顶部头图
    }
    if (obj?.cards?.length > 0) {
        let newCards = [];
        for (let card of obj.cards) {
            if (card?.card_group?.length > 0) {
                let newGroup = [];
                for (let group of card.card_group) {
                    let cardType = group.card_type;
                    // 120,145 视频版块轮播图 192横版热门视频 电影 颜值 电视剧等
                    if ([120, 145, 192]?.includes(cardType)) {
                        continue;
                    }
                    // 我的热搜 查看更多热搜
                    if (cardType === 6) {
                        continue;
                    }
                    if (group?.mblog) {
                        removeAvatar(group?.mblog); // 卡片挂件,关注按钮
                    }
                    newGroup.push(group);
                }
                card.card_group = newGroup;
                newCards.push(card);
            } else {
                let cardType = card.card_type;
                // 17猜你想搜 58搜索偏好设置
                if ([17, 58]?.includes(cardType)) {
                    continue;
                }
                if (card?.mblog) {
                    removeAvatar(card?.mblog); // 卡片挂件,关注按钮
                }
                newCards.push(card);
            }
        }
        obj.cards = newCards;
    }
}

/**
 * 处理签到显示弹窗
 * @param obj
 */
function handleCheckinShow(obj) {
    if (obj?.show) {
        obj.show = 0;
    }
    if (obj?.show_time) {
        obj.show_time = 0;
    }
}

/**
 * 处理首页右上角发布按钮
 * @param obj
 */
function handleIndexPageButton(obj) {
    if (obj?.elements?.length > 0) {
        obj.elements = obj.elements
            .filter((i) => ["写微博", "相册", "图片", "视频", "签到/点评"]?.includes(i?.app_name));
    }
}

/**
 * 处理评论构建
 * @param obj
 */
function handleBuildComments(obj){
    if (obj?.datas?.length > 0) {
        let newItems = [];
        for (let item of obj.datas) {
            if (item?.data) {
                if (!isAd(item?.data)) {
                    removeCommentAd(item?.data);
                    // 6为你推荐更多精彩内容 15过滤提示 41评论区氛围调查
                    if ([6, 15, 41]?.includes(item?.type)) {
                        continue;
                    }
                    if (["广告", "荐读", "评论总结", "推荐", "相关内容", "相关评论"]?.includes(item?.adType)) {
                        continue;
                    }
                    newItems.push(item);
                }
            }
        }
        obj.datas = newItems;
    } else if (obj?.root_comments?.length > 0) {
        let newItems = [];
        for (let item of obj.root_comments) {
            if (!isAd(item)) {
                if (item?.comment_bubble) {
                    delete item.comment_bubble; // 评论气泡 新版本
                }
                if (item?.data?.comment_bubble) {
                    delete item.data.comment_bubble; // 评论气泡
                }
                if (item?.data?.comment_bullet_screens_message) {
                    delete item.data.comment_bullet_screens_message; // 评论弹幕
                }
                if (item?.data?.hot_icon) {
                    delete item.data.hot_icon; // 热评小图标 弹幕 首评
                }
                if (item?.data?.vip_button) {
                    delete item.data.vip_button; // 会员气泡按钮
                }
                // 微博伪装评论
                if (item.user) {
                    removeAvatar(item); // 头像挂件,关注按钮
                    if (["超话社区", "微博视频"]?.includes(item?.user?.name)) {
                        continue;
                    }
                }
                newItems.push(item);
            }
        }
        obj.root_comments = newItems;
    } else if (obj?.comments?.length > 0) {
        let newItems = [];
        for (let item of obj.comments) {
            if (item?.reply_comment?.comment_badge) {
                delete item.reply_comment.comment_badge;
            }
            if (item?.user?.icons) {
                delete item.user.icons;
            }
            newItems.push(item);
        }
        obj.comments = newItems;
    }
    if (obj?.rootComment) {
        if (obj?.rootComment?.comment_bubble) {
            delete obj.rootComment.comment_bubble;
        }
    }
    if (obj?.status?.page_info) {
        removeVoteInfo(obj?.status); // 投票窗口
    }
}

/**
 * 处理异步容器
 * @param obj
 */
function handleContainerAsyn(obj) {
    if (obj?.items?.length > 0) {
        let newItems = [];
        for (let item of obj.items) {
            removeAvatar(item?.data); // 关注按钮
            if (/infeed_may_interest_in/.test(item?.itemId)) {
                // 你可能感兴趣的超话
                continue;
            }
            if (item?.itemId === null) {
                // 横版博主卡片
                continue;
            }
            if (item?.items?.length > 0) {
                for (let i of item.items) {
                    removeAvatar(i?.data); // 背景卡片
                    removeVoteInfo(i?.data); // 投票窗口
                }
            }
            newItems.push(item);
        }
        obj.items = newItems;
    }
}

/**
 * 处理私信列表
 * @param obj
 */
function handleDirectMessages(obj) {
    if (obj?.user_list?.length > 0) {
        obj.user_list = obj.user_list.filter((i) => !["活动通知", "闪聊"]?.includes(i?.user?.name));
    }
}

/**
 * 处理热搜列表
 * @param obj
 */
function handleFlowList(obj) {
    // 关注列表
    if (obj?.items?.length > 0) {
        for (let item of obj.items) {
            if (item?.items?.length > 0) {
                for (let i of item.items) {
                    removeAvatar(i?.data); // 背景卡片
                    removeVoteInfo(i?.data); // 投票窗口
                }
            }
        }
    }
    if (obj?.channelInfo?.channels?.length > 0) {
        let newTabs = [];
        for (let tab of obj.channelInfo.channels) {
            if (/_selfrecomm/.test(tab?.flowId)) {
                // 关注页推荐tab
                continue;
            } else if (/_chaohua/.test(tab?.flowId)) {
                // 关注页超话tab
                continue;
            } else {
                newTabs.push(tab);
            }
        }
        obj.channelInfo.channels = newTabs;
    }
}

/**
 * 处理热搜页
 * @param obj
 */
function handleFlowPage(obj) {
    // 热搜列表
    if (obj?.items?.length > 0) {
        let newItems = [];
        for (let item of obj.items) {
            if (item?.data?.itemid === "hot-search-push-notice") {
                // 开启推送通知的提示
                continue;
            }
            if (item?.items?.length > 0) {
                let newII = [];
                for (let i of item.items) {
                    if (i?.data?.hasOwnProperty("promotion")) {
                        // 热搜列表中的推广项目
                        continue;
                    } else if (/_img_search_stick/.test(i?.data?.pic)) {
                        // 手动置顶的微博热搜
                        continue;
                    } else {
                        newII.push(i);
                    }
                }
                item.items = newII;
            }
            newItems.push(item);
        }
        obj.items = newItems;
    }
}


/**
 * 处理所有群组消息
 * @param obj
 */
function handleGroupsAllGroups(obj) {
    // 顶部tab
    if (obj?.pageDatas?.length > 0) {
        // homeFeed关注 homeHot推荐
        let newTabs = [];
        for (let item of obj.pageDatas) {
            if (item?.pageDataType === "homeExtend") {
                // 多余的推广tab 比如华为Mate60
                continue;
            } else {
                if (item?.categories?.length > 0) {
                    let newCates = [];
                    for (let i of item.categories) {
                        if (i?.title === "默认分组") {
                            if (i?.pageDatas?.length > 0) {
                                let newII = [];
                                for (let ii of i.pageDatas) {
                                    if (["最新微博", "特别关注", "好友圈", "视频"]?.includes(ii?.title)) {
                                        // 白名单列表
                                        newII.push(ii);
                                    } else {
                                        continue;
                                    }
                                    if (ii?.title === "最新微博") {
                                        ii.title = "微博";
                                    }
                                }
                                i.pageDatas = newII;
                            }
                        }
                        newCates.push(i);
                    }
                    item.categories = newCates;
                }
                newTabs.push(item);
            }
        }
        obj.pageDatas = newTabs;
    }
}


/**
 * 处理消息流
 * @param obj
 */
function handleMessageFlow(obj) {
    // 消息动态页
    if (obj?.messages?.length > 0) {
        let newMsgs = [];
        for (let msg of obj.messages) {
            if (msg?.msg_card?.ad_tag) {
                continue;
            } else {
                newMsgs.push(msg);
            }
        }
        obj.messages = newMsgs;
    }
}

/**
 * 处理搜索页列表及超话
 * @param obj
 */
function handlePage(obj) {
    // 搜索页列表,超话
    if (obj?.cards?.length > 0) {
        if (obj?.cards?.[0]?.card_group?.length > 0) {
            obj.cards[0].card_group = obj.cards[0].card_group.filter((c) => !(c?.actionlog?.ext?.includes("ads_word") || c?.itemid?.includes("t:51") || c?.itemid?.includes("ads_word")));
        }
        obj.cards = obj.cards.filter((i) => !(i?.itemid?.includes("feed_-_invite") || // 超话里的好友
            i?.itemid?.includes("infeed_friends_recommend") || // 好友关注
            i?.itemid?.includes("infeed_may_interest_in") || // 你可能感兴趣的超话
            i?.itemid?.includes("infeed_pagemanual3") || // 手动区域3
            i?.itemid?.includes("infeed_weibo_mall") || // 微博小店
            i?.mblog?.mblogtypename?.includes("广告")));
    } else if (obj?.card_group?.length > 0) {
        obj.card_group = obj.card_group.filter((i) => i?.desc?.includes("你可能感兴趣的超话"));
    }
}


/**
 * 处理个人主页时间线容器
 * @param obj
 */
function handleProfileContainerTimeline(obj) {
    if (obj?.loadedInfo?.follow_guide_info) {
        delete obj.loadedInfo.follow_guide_info; // 个人主页关注弹窗
    }
    // 个人主页信息流
    if (obj?.items?.length > 0) {
        let newItems = [];
        for (let item of obj.items) {
            if (item?.data?.left_hint?.[0]?.content === "全部微博(0)" && item?.data?.card_type === 216) {
                // 全部微博为0的博主
                break;
            } else if (/内容/.test(item?.data?.name) && item?.data?.card_type === 58) {
                // 个人微博页刷完后的推荐微博
                break;
            } else {
                if (item?.category === "card") {
                    // 58微博展示时间段提示 216筛选按钮
                    if ([58, 216]?.includes(item?.data?.card_type)) {
                        if (/没有公开博文，为你推荐以下精彩内容/.test(item?.data?.name)) {
                            // 个人微博页刷完后的推荐信息流
                            continue;
                        }
                    }
                    newItems.push(item);
                } else if (item?.category === "group") {
                    // 遍历group,保留置顶微博
                    if (item?.header?.data?.icon) {
                        delete item.header.data.icon; // 置顶微博背景图
                    }
                    if (item?.itemId?.includes("INTEREST_PEOPLE")) {
                        // 可能感兴趣的人
                        continue;
                    }
                    if (item?.profile_type_id === "weibo_cardpics") {
                        // 近期热门 精选微博 那年今日等横版内容
                        continue;
                    }
                    if (item?.items?.length > 0) {
                        let newII = [];
                        for (let ii of item.items) {
                            if (ii?.category === "feed") {
                                removeAvatar(ii?.data); // 头像挂件,关注按钮
                                removeFeedAd(ii?.data); // 信息流推广
                                removeVoteInfo(ii?.data); // 投票窗口
                                // 评论指引
                                if (ii?.data?.enable_comment_guide) {
                                    ii.data.enable_comment_guide = false;
                                }
                                newII.push(ii);
                            } else if (ii?.category === "card") {
                                if ([10, 48, 176]?.includes(ii?.data?.card_type)) {
                                    // 最近关注与互动过的博主
                                    continue;
                                }
                                if (ii?.data?.rightImage) {
                                    delete ii.data.rightImage; // 新版置顶微博皇冠
                                }
                                if (ii?.data?.backgroundImage) {
                                    delete ii.data.backgroundImage; // 新版置顶微博背景图
                                }
                                newII.push(ii);
                            }
                        }
                        item.items = newII;
                    }
                    newItems.push(item);
                } else if (item?.category === "feed") {
                    if (!isAd(item?.data)) {
                        removeFeedAd(item?.data); // 信息流推广
                        removeVoteInfo(item?.data); // 投票窗口
                        if (item?.data?.source?.includes("生日动态")) {
                            // 移除生日祝福微博
                            continue;
                        }
                        if (item?.data?.title?.text !== "热门" && item?.data?.title?.structs?.length > 0) {
                            // 移除赞过的微博 保留热门内容
                            continue;
                        }
                        newItems.push(item);
                    }
                }
            }
        }
        obj.items = newItems;
    }
}

/**
 * 处理个人主页关注操作
 * @param obj
 */
function handleProfileDealAtt(obj) {
    // 个人主页点击关注后展示菜单
    if (obj?.cards?.length > 0) {
        obj.cards = []; // 相关推荐卡片
    }
    if (obj?.toolbar_menus_new?.items?.length > 0) {
        let toolbar = obj.toolbar_menus_new;
        // 底部菜单
        let newTools = [];
        for (let item of toolbar.items) {
            if (item?.identifier === "recommend") {
                // 相关推荐
                continue;
            } else if (/reward_/.test(item?.identifier)) {
                // 赞赏
                continue;
            } else {
                newTools.push(item);
            }
        }
        toolbar.items = newTools;
    }
}

/**
 * 处理个人主页
 * @param obj
 */
function handleProfileMe(obj) {
    // 我的页面
    if (obj?.vipHeaderBgImage) {
        delete obj.vipHeaderBgImage;
    }
    if (obj?.items?.length > 0) {
        let newItems = [];
        for (let item of obj.items) {
            let itemId = item.itemId;
            if (itemId === "profileme_mine") {
                if (item?.header) {
                    if (item?.header?.vipView) {
                        delete item.header.vipView;
                    }
                    if (item?.header?.vipCenter) {
                        delete item.header.vipCenter;
                    }
                    if (item?.header?.vipIcon) {
                        delete item.header.vipIcon;
                    }
                }
                if (item?.items?.length > 0) {
                    for (let d of item.items) {
                        if (d.itemId === "mainnums_friends") {
                            let s = d.click.modules[0].scheme;
                            d.click.modules[0].scheme = s.replace("231093_-_selfrecomm", "231093_-_selffollowed");
                        }
                    }
                }
                newItems.push(item);
            } else if (itemId === "100505_-_top8") {
                if (item?.items?.length > 0) {
                    item.items = item.items.filter((i) => i?.itemId === "100505_-_album" || // 我的相册
                            i?.itemId === "100505_-_like" || // 赞/收藏
                            i?.itemId === "100505_-_watchhistory" || // 浏览记录
                            i?.itemId === "100505_-_draft" // 草稿箱
                        // i?.itemId === "100505_-_pay" || // 我的钱包
                        // i?.itemId === "100505_-_ordercenter" || // 我的订单
                        // i?.itemId === "100505_-_productcenter" || // 创作中心
                        // i?.itemId === "100505_-_promote" || // 广告中心
                    );
                }
                newItems.push(item);
            } else if (itemId === "100505_-_manage") {
                if (item?.style) {
                    delete item.style;
                }
                if (item?.images) {
                    delete item.images; // 移除分隔符的点点点
                }
                newItems.push(item);
            } else if (itemId === "100505_-_manage2") {
                if (item?.footer) {
                    delete item.footer; // 移除面板样式
                }
                if (item?.body) {
                    delete item.body; // 移除框内推广
                }
                newItems.push(item);
            } else if (itemId === "100505_-_chaohua" || itemId === "100505_-_recentlyuser") {
                newItems.push(item);
            } else {
                // 移除其他推广
                continue;
            }
        }
        obj.items = newItems;
    }
}

/**
 * 处理个人主页状态标签页
 * @param obj
 */
function handleProfileStatusesTab(obj) {
    if (obj?.cards?.length > 0) {
        let newCards = [];
        for (let card of obj.cards) {
            if (card?.card_group?.length > 0) {
                let newGroup = [];
                for (let group of card.card_group) {
                    let cardType = group.card_type;
                    // 22那年今天
                    if (cardType === 22) {
                        continue;
                    }
                    if (group?.mblog) {
                        removeAvatar(group?.mblog); // 卡片挂件,关注按钮
                        removeVoteInfo(group?.mblog); // 投票窗口
                    }
                    newGroup.push(group);
                }
                card.card_group = newGroup;
                newCards.push(card);
            } else {
                if (card?.mblog) {
                    removeAvatar(card?.mblog); // 卡片挂件,关注按钮
                    removeVoteInfo(card?.mblog); // 投票窗口
                }
                newCards.push(card);
            }
        }
        obj.cards = newCards;
    }
    if (obj?.cardlistInfo?.page_type === "08") {
        delete obj.cardlistInfo; // 我的热搜
    }
}

/**
 * 处理个人详情页
 * @param obj
 */
function handleProfileUserInfo(obj) {
    //
    if (obj?.header?.data?.userInfo?.avatar_extend_info) {
        delete obj.header.data.userInfo.avatar_extend_info; // 头像挂件
    }
    if (obj?.profileSkin?.data) {
        delete obj.profileSkin.data; // 全套个性皮肤
    }
    if (obj?.footer?.data) {
        let toolbar = obj.footer.data.toolbar_menus_new;
        // 底部菜单项目
        if (toolbar?.lottie_guide) {
            delete toolbar.lottie_guide; // 弹窗
        }
        if (toolbar?.servicePopup?.subData) {
            delete toolbar.servicePopup.subData; // 服务悬浮窗口
        }
        if (toolbar?.items?.length > 0) {
            let newTools = [];
            for (let item of toolbar.items) {
                if (item?.identifier === "recommend") {
                    // 相关推荐
                    continue;
                } else if (item?.identifier === "urge") {
                    // 催更
                    continue;
                } else if (/reward_/.test(item?.identifier)) {
                    // 赞赏
                    continue;
                } else {
                    newTools.push(item);
                }
            }
            toolbar.items = newTools;
        }
    }
}

/**
 * 处理推送活动
 * @param obj
 */
function handlePushActive(obj) {
    if (obj?.compose_add_guide) {
        delete obj.compose_add_guide; // 过期的情人节红包
    }
    // delete obj.feed_redpacket; // 首页右上角红包图标
    if (obj?.floating_windows_force_show) {
        delete obj.floating_windows_force_show; // 强制展示的悬浮窗
    }
    if (obj?.interceptad) {
        delete obj.interceptad; // 可能是首页签到弹窗
    }
    if (obj?.interceptad_cardlist) {
        delete obj.interceptad_cardlist; // 可能是首页签到弹窗
    }
    if (obj?.loginconfig) {
        delete obj.loginconfig; // 登录领红包
    }
    if (obj?.profile_lotties) {
        delete obj.profile_lotties; // 个人主页头像挂件素材
    }
    if (obj?.ug_red_paper) {
        delete obj.ug_red_paper; // 可能是首页签到弹窗
    }
    if (obj?.weibo_pic_banner) {
        delete obj.weibo_pic_banner; // 微博种草晒图
    }
    // 禁用所有的悬浮窗
    if (obj?.disable_floating_window) {
        obj.disable_floating_window = "1";
    }
    // 首页右上角红包图标
    if (obj?.feed_redpacket) {
        obj.feed_redpacket.starttime = "2208960000";
        obj.feed_redpacket.interval = "31536000";
        obj.feed_redpacket.endtime = "2209046399";
        if (obj?.feed_redpacket?.finish_icon) {
            delete obj.feed_redpacket.finish_icon;
        }
        if (obj?.feed_redpacket?.guide) {
            delete obj.feed_redpacket.guide;
        }
        if (obj?.feed_redpacket?.icon) {
            delete obj.feed_redpacket.icon;
        }
        if (obj?.feed_redpacket?.pre_icon) {
            delete obj.feed_redpacket.pre_icon;
        }
    }
    if (obj?.floating_window_for_live_streaming) {
        obj.floating_window_for_live_streaming = false;
    }
    if (obj?.floating_window_show_interval) {
        obj.floating_window_show_interval = 31536000;
    }
    if (obj?.floating_windows?.length > 0) {
        obj.floating_windows = obj.floating_windows.filter((i) => !/(?:^ad_?|red_pocket|ug_high_priority)/.test(i?.subtype));
    }
}

/**
 * 处理搜索
 * @param obj
 */
function handleSearch(obj) {
    // 搜索页信息流
    if (url.includes("container_timeline")) {
        if (obj?.loadedInfo) {
            delete obj.loadedInfo;
        }
        if (obj?.items?.length > 0) {
            let newItems = [];
            for (let item of obj.items) {
                if (item?.category === "feed") {
                    if (!isAd(item?.data)) {
                        removeFeedAd(item?.data); // 信息流推广
                        newItems.push(item);
                    }
                } else if (item?.category === "card") {
                    // 19热议等tab 22商业推广 118横版广告图片 206,249横版视频广告 208实况热聊 217错过了热词 236微博趋势 261奥运滚动横幅
                    if ([19, 22, 118, 206, 208, 217, 236, 249, 261]?.includes(item?.data?.card_type)) {
                        continue;
                    } else if (item?.data?.itemid === "ads_slide") {
                        // 商业推广 主图 附图
                        continue;
                    } else if (item?.data?.cate_id === "1114") {
                        // 微博趋势标题
                        continue;
                    } else if (item?.data?.hasOwnProperty("rank")) {
                        // 奥运等排行榜
                        continue;
                    } else {
                        newItems.push(item);
                    }
                } else if (item?.category === "cell") {
                    // 保留信息流分割线
                    newItems.push(item);
                } else if (item?.category === "group") {
                    if (item?.item_category === "insert_item") {
                        // 信息流内部嵌入的"微博热搜"
                        continue;
                    } else {
                        if (item?.items?.length > 0) {
                            let newII = [];
                            for (let ii of item.items) {
                                // 118横版广告图片 182热议话题 217错过了热词 247横版视频广告 264微博趋势
                                if ([118, 182, 192, 217, 247, 264]?.includes(ii?.data?.card_type)) {
                                    continue;
                                } else if (ii?.data?.cate_id === "1114") {
                                    // 微博趋势
                                    continue;
                                } else {
                                    newII.push(ii);
                                }
                            }
                            item.items = newII;
                        }
                    }
                    newItems.push(item);
                }
            }
            obj.items = newItems;
        }
    } else if (url.includes("finder")) {
        if (obj?.channelInfo?.channels?.length > 0) {
            let newChannels = [];
            for (let channel of obj.channelInfo.channels) {
                // 顶部标签栏 白名单
                if (["band_channel", "discover_channel", "trends_channel"]?.includes(channel?.key)) {
                    let payload = channel.payload;
                    if (payload) {
                        if (payload?.loadedInfo) {
                            // 去除搜索框填充词
                            if (payload?.loadedInfo?.searchBarContent?.length > 0) {
                                payload.loadedInfo.searchBarContent = [];
                            }
                            if (payload?.loadedInfo?.headerBack?.channelStyleMap) {
                                delete payload.loadedInfo.headerBack.channelStyleMap; // 去除搜索背景图片
                            }
                            if (payload?.loadedInfo?.searchBarStyleInfo) {
                                delete payload.loadedInfo.searchBarStyleInfo; // 搜索框样式
                            }
                        }
                        if (payload?.items?.length > 0) {
                            let newItems = [];
                            for (let item of payload.items) {
                                if (item?.category === "feed") {
                                    if (!isAd(item?.data)) {
                                        removeFeedAd(item.data); // 信息流推广
                                        newItems.push(item);
                                    }
                                } else if (item?.category === "card") {
                                    // 19热议等tab 22商业推广 118横版广告图片 206,249横版视频广告 208实况热聊 217错过了热词 236微博趋势 261奥运滚动横幅
                                    if ([19, 22, 118, 206, 208, 217, 236, 249, 261]?.includes(item?.data?.card_type)) {
                                        continue;
                                    } else if (item?.data?.itemid === "ads_slide") {
                                        // 商业推广 主图 附图
                                        continue;
                                    } else if (item?.data?.cate_id === "1114") {
                                        // 微博趋势标题
                                        continue;
                                    } else if (item?.data?.hasOwnProperty("rank")) {
                                        // 奥运等排行榜
                                        continue;
                                    } else {
                                        newItems.push(item);
                                    }
                                } else if (item?.category === "cell") {
                                    // 保留信息流分割线
                                    newItems.push(item);
                                } else if (item?.category === "group") {
                                    if (item?.items?.length > 0) {
                                        let newII = [];
                                        for (let ii of item.items) {
                                            // 118横版广告图片 182热议话题 192横版好看视频 217错过了热词 247横版视频广告 264微博趋势
                                            if ([118, 182, 192, 217, 247, 264]?.includes(ii?.data?.card_type)) {
                                                continue;
                                            } else if (ii?.data?.cate_id === "1114") {
                                                // 微博趋势
                                                continue;
                                            } else {
                                                newII.push(ii);
                                            }
                                        }
                                        item.items = newII;
                                    }
                                    newItems.push(item);
                                }
                            }
                            payload.items = newItems;
                        }
                    }
                    newChannels.push(channel);
                } else {
                    continue;
                }
            }
            obj.channelInfo.channels = newChannels;
        }
        if (obj?.channelInfo?.moreChannels) {
            // 更多版块
            delete obj.channelInfo.moreChannels;
        }
        if (obj?.header?.data?.items?.length > 0) {
            // 2025-01-24更新 新版本finder_window
            let newItems = [];
            for (let item of obj.header.data.items) {
                if (item?.category === "card") {
                    if ([19, 22, 118, 206, 208, 217, 236, 249, 261]?.includes(item?.data?.card_type)) {
                        continue;
                    }
                    if (item?.data?.hasOwnProperty("rank")) {
                        // 各种赛事排行榜
                        continue;
                    }
                } else if (item?.category === "group") {
                    if (item?.items?.length > 0) {
                        let newII = [];
                        for (let i of item.items) {
                            if ([118, 182, 192, 217, 247, 264]?.includes(i?.data?.card_type)) {
                                continue;
                            } else {
                                newII.push(i);
                            }
                        }
                        item.items = newII;
                    }
                }
                newItems.push(item);
            }
            obj.header.data.items = newItems;
        }
    }
}

/**
 * 处理全局搜索
 * @param obj
 */
function handleSearchAll(obj){
    if (obj?.header?.data) {
        // 商品推广头部淘宝跳转
        const items = ["bg_img", "background_scheme", "background_url"];
        for (let i of items) {
            delete obj.header.data[i];
        }
    }
    if (obj?.loadedInfo?.serviceMap?.layer) {
        delete obj.loadedInfo.serviceMap.layer; // 搜索结果 悬浮窗
    }
    if (obj?.footer) {
        // 讨论区动画
        if (obj?.footer?.data?.bg_lottie) {
            delete obj.footer.data.bg_lottie;
        }
        if (obj?.footer?.data?.bg_lottie_dark) {
            delete obj.footer.data.bg_lottie_dark;
        }
        if (obj?.footer?.data?.discuss_avatars) {
            delete obj.footer.data.discuss_avatars; // 进入讨论区气泡动画头像
        }
        if (obj?.footer?.data?.menus?.length > 0) {
            // 底部菜单
            obj.footer.data.menus = obj.footer.data.menus.filter((i) => !/\d+_ai\./.test(i?.pic));
        }
    }
    if (obj?.cards?.length > 0) {
        let newCards = [];
        for (let card of obj.cards) {
            if (card?.card_group?.length > 0) {
                let newGroup = [];
                for (let group of card.card_group) {
                    if (group?.card_type === 22) {
                        // 先筛选card_group里面的card_type
                        // 横版广告图
                        continue;
                    } else if (group?.card_type === 42 && group?.title_extra_text === "广告") {
                        // 推荐品牌广告
                        continue;
                    } else if (group?.card_type === 3 && group?.pics?.length > 0) {
                        // 推荐品牌广告图
                        continue;
                    } else {
                        if (group?.mblog) {
                            // 有mblog字段的过滤广告
                            if (!isAd(group?.mblog)) {
                                if (group?.mblog?.title_source) {
                                    delete group.mblog.title_source;
                                }
                                if (group?.mblog?.source_tag_struct) {
                                    delete group.mblog.source_tag_struct;
                                }
                                if (group?.mblog?.extend_info) {
                                    delete group.mblog.extend_info;
                                }
                                if (group?.mblog?.common_struct) {
                                    delete group.mblog.common_struct; // 商品橱窗
                                }
                                removeAvatar(group?.mblog); // 头像挂件,关注按钮
                                removeVoteInfo(group?.mblog); // 投票窗口
                                // 新版热推
                                if (group?.mblog?.is_ad === 1) {
                                    continue;
                                }
                                newGroup.push(group);
                            }
                        } else {
                            newGroup.push(group); // 没有mblog字段的全部推送
                        }
                    }
                }
                card.card_group = newGroup;
                newCards.push(card);
            } else {
                if (card?.mblog) {
                    if (!isAd(card?.mblog)) {
                        removeAvatar(card?.mblog); // 头像挂件,关注按钮
                        if (card?.mblog?.title_source) {
                            delete card.mblog.title_source;
                        }
                        if (card?.mblog?.source_tag_struct) {
                            delete card.mblog.source_tag_struct;
                        }
                        if (card?.mblog?.extend_info) {
                            delete card.mblog.extend_info;
                        }
                        if (card?.mblog?.common_struct) {
                            delete card.mblog.common_struct; // 商品橱窗
                        }
                        removeVoteInfo(card?.mblog); // 投票窗口
                        // 隐藏在 cards 里面的投票窗口
                        if (card?.mblog?.page_info?.cards?.length > 0) {
                            let page = card.mblog.page_info;
                            for (let i of page.cards) {
                                if (i?.media_info?.vote_info) {
                                    delete i.media_info.vote_info;
                                }
                            }
                        }
                        newCards.push(card);
                    }
                }
            }
        }
        obj.cards = newCards;
    }
// 13.11.1版本obj下的cards变为了items 2023-11-26
    if (obj?.items?.length > 0) {
        let newItems = [];
        for (let item of obj.items) {
            if (!isAd(item?.data)) {
                if (item?.category === "feed") {
                    removeFeedAd(item?.data); // 信息流推广
                    removeVoteInfo(item?.data); // 投票窗口
                    newItems.push(item);
                } else if (item?.category === "group") {
                    if (item?.items?.length > 0) {
                        let newII = [];
                        for (let ii of item.items) {
                            if (ii?.cate_id === "638" && ii?.readtimetype === "card") {
                                // 大家都在问
                                continue;
                            } else {
                                if (!isAd(ii?.data)) {
                                    removeAvatar(ii?.data);
                                    removeFeedAd(ii?.data); // 商品橱窗
                                    // 3推广卡片 17相关搜索 22广告图 25智搜总结 30推荐博主 42,236智搜问答 89商品推广视频 101大家都在问 206推广视频
                                    if ([3, 17, 22, 30, 42, 89, 101, 206]?.includes(ii?.data?.card_type)) {
                                        continue;
                                    } else if (ii?.data?.card_type === 4 && ii?.data?.cate_id === "640") {
                                        // 大家都在问
                                        continue;
                                    } else if (ii?.data?.card_type === 42 && ii?.data?.is_ads === true) {
                                        // 商品推广desc
                                        continue;
                                    }
                                    newII.push(ii);
                                }
                            }
                        }
                        item.items = newII;
                    }
                    newItems.push(item);
                } else {
                    newItems.push(item);
                }
            }
        }
        obj.items = newItems;
    }
}

/**
 * 处理超话搜索
 * @param obj
 */
function handleChaohuaSearch(obj) {
    // 超话搜索页
    if (obj?.items?.length > 0) {
        // 1007 可能感兴趣的话题
        obj.items = obj.items.filter((i) => i?.data?.card_type !== 1007);
    }
}

/**
 * 处理微博详情页
 * @param obj
 */
function handleContainerDetail(obj) {
    // 新版 微博详情页
    if (obj?.pageHeader?.data?.items?.length > 0) {
        obj.pageHeader.data.items = obj.pageHeader.data.items.filter(item => {
            return !(
                (item?.category === "card" && item?.data?.is_ad_card === 1) || // 底部卡片广告
                (item?.category === "group" && item?.items?.length > 0) ||      // 博主好物种草/关注推荐
                (item?.category === "wboxcard" && item?.data?.card_type === 236) || // 底部横版广告
                (item?.data?.itemid === "top_searching" && item?.data?.card_type === 248) // 底部大家都在搜
            );
        });
    }
    if (obj?.detailInfo?.extend?.reward_info) {
        // 赞赏信息
        delete obj.detailInfo.extend.reward_info;
    }
    if (obj?.detailInfo?.status?.reward_info) {
        // 赞赏信息
        delete obj.detailInfo.status.reward_info;
    }
}

/**
 * 处理 v2版本微博评论区广告
 * @param obj
 */
function handleContainerDetailComment(obj) {
    log(`ℹ️ 脚本处理 v2 评论区广告`);
    if (obj?.items?.length > 0) {
        log(`📜 原始共： ${obj?.items?.length} 条评论`);
        let newItems = [];
        for (let item of obj.items) {
            if (item?.data) {
                if (!isAd(item?.data)) {
                    removeCommentAd(item?.data);
                    if (["广告", "荐读", "评论总结", "推荐", "相关内容", "相关评论"]?.includes(item?.data?.adType)) {
                        continue;
                    }
                    if (item?.data?.itemid === "ai_summary_entrance_real_show" && item?.data?.card_type === 236) {
                        // ai总结
                        continue;
                    }
                    newItems.push(item);
                }
            }
        }
        obj.items = newItems;
        log(`✅ 清理后共： ${newItems?.length} 条评论`);
    }
    log(`🏁 v2评论处理完毕`);
}

/**
 * 处理热门时间线
 * @param obj
 */
function handleContainerTimelineHot(obj) {
    // 首页推荐tab信息流
    for (let s of ["ad", "advertises", "trends", "headers"]) {
        if (obj?.[s]) {
            delete obj[s];
        }
    }
    if (obj?.items?.length > 0) {
        let newItems = [];
        for (let item of obj.items) {
            if (!isAd(item?.data)) {
                if (item?.category === "feed") {
                    removeFeedAd(item?.data); // 信息流推广
                    removeVoteInfo(item?.data); // 投票窗口
                    newItems.push(item);
                } else {
                    // 移除其他推广
                    continue;
                }
            }
        }
        obj.items = newItems;
    }
    if (obj?.statuses?.length > 0) {
        let newStatuses = [];
        for (let item of obj.statuses) {
            if (!isAd(item)) {
                removeFeedAd(item); // 信息流推广
                newStatuses.push(item);
            }
        }
        obj.statuses = newStatuses;
    }
}

/**
 * 处理时间线容器
 * @param obj
 */
function handleContainerTimeline(obj) {
    if (obj?.loadedInfo?.headers) {
        delete obj.loadedInfo.headers; // 首页关注tab信息流
    }
    if (obj?.common_struct) {
        delete obj.common_struct; // 商品橱窗
    }
    if (obj?.items?.length > 0) {
        let newItems = [];
        for (let item of obj.items) {
            if (!isAd(item?.data) && !isAd(item?.status)) {
                if (item?.category === "dynamic") {
                    if (item?.status?.action_button_icon_dic) {
                        delete item.status.action_button_icon_dic;
                    }
                    removeFeedAd(item?.status); // 信息流推广
                    removeVoteInfo(item?.status); // 投票窗口
                    if (item.status?.title?.structs) {
                        // 移除 未关注人消息 (你关注的博主，他自己关注的别的博主的微博消息)
                        continue;
                    }
                    // 快转内容
                    if (item?.status?.screen_name_suffix_new?.length > 0) {
                        if (item?.status?.screen_name_suffix_new?.[3]?.content === "快转了") {
                            continue;
                        }
                    }
                    // 美妆精选季
                    if (item?.status?.title?.text?.includes("精选")) {
                        continue;
                    }
                    // 未关注博主
                    if (item?.status?.user?.following === false) {
                        continue;
                    }
                    // 关闭关注推荐
                    if (item?.status?.user?.unfollowing_recom_switch === 1) {
                        item.status.user.unfollowing_recom_switch = 0;
                    }
                    // 博主top100
                    if (item?.status?.tag_struct?.length > 0) {
                        item.status.tag_struct = [];
                    }
                    newItems.push(item);
                } else if (item?.category === "feed") {
                    if (item?.data?.action_button_icon_dic) {
                        delete item.data.action_button_icon_dic;
                    }
                    removeFeedAd(item?.data); // 信息流推广
                    removeVoteInfo(item?.data); // 投票窗口
                    if (item.data?.title?.structs) {
                        // 移除 未关注人消息 (你关注的博主，他自己关注的别的博主的微博消息)
                        continue;
                    }
                    // 快转内容
                    if (item?.data?.screen_name_suffix_new?.length > 0) {
                        if (item?.data?.screen_name_suffix_new?.[3]?.content === "快转了") {
                            continue;
                        }
                    }
                    // 美妆精选季
                    if (item?.data?.title?.text?.includes("精选")) {
                        continue;
                    }
                    // 未关注博主
                    if (item?.data?.user?.following === false) {
                        continue;
                    }
                    // 关闭关注推荐
                    if (item?.data?.user?.unfollowing_recom_switch === 1) {
                        item.data.user.unfollowing_recom_switch = 0;
                    }
                    // 博主top100
                    if (item?.data?.tag_struct?.length > 0) {
                        item.data.tag_struct = [];
                    }
                    newItems.push(item);
                } else if (item?.category === "feedBiz") {
                    newItems.push(item); // 管理特别关注按钮
                } else {
                    // 移除其他推广
                    continue;
                }
            }
        }
        obj.items = newItems;
    }
}

/**
 * 处理话题时间线容器
 * @param obj
 */
function handleContainerTopicTimeline(obj) {
    // 超话信息流
    if (obj?.header?.data?.follow_guide_info) {
        delete obj.header.data.follow_guide_info; // 底部弹出的关注按钮
    }
    if (obj?.items?.length > 0) {
        let newItems = [];
        for (let item of obj.items) {
            if (item?.category === "feed") {
                removeAvatar(item?.data); // 头像挂件,关注按钮
                if (!isAd(item?.data)) {
                    if (item?.data?.title?.text?.includes("新人导师")) {
                        // 萌新帖 互动赢新人导师
                        delete item.data.title;
                    }
                    newItems.push(item);
                }
            } else if (item?.category === "card") {
                if ([4, 197, 1012]?.includes(item?.data?.card_type)) {
                    // 4你可能感兴趣的超话 197你可能感兴趣的超话 1012热门超话
                    continue;
                } else {
                    if (item?.data?.card_type === 31 && item?.data?.hotwords?.length > 0) {
                        // 31 搜索框滚动热词
                        item.data.hotwords = [];
                    }
                    if (item?.data?.card_type === 22 && item?.data?.hasOwnProperty("card_ad_style")) {
                        continue;
                    }
                    newItems.push(item);
                }
            } else if (item?.category === "group") {
                if (item?.style?.topHover) {
                    delete item.style.topHover; // 空降发帖背景图
                }
                if (item?.items?.length > 0) {
                    if (item?.itemId === null) {
                        // 超话页顶部乱七八糟
                        let newII = [];
                        for (let ii of item.items) {
                            if (ii?.data?.hasOwnProperty("itemid")) {
                                if (ii?.data?.itemid?.includes("mine_topics")) {
                                    // 保留我的超话
                                    newII.push(ii);
                                } else if (ii?.data?.itemid?.includes("tab_search_input")) {
                                    // 保留搜索框
                                    if (ii?.data?.hotwords) {
                                        ii.data.hotwords = [{word: "搜索超话"}]; // 删除热搜词
                                    }
                                    newII.push(ii);
                                } else if (ii?.data?.itemid?.includes("poiRankList")) {
                                    newII.push(ii); // 保留地点超话 地标人气榜
                                }
                            } else {
                                newII.push(ii); // 放行无itemid字段的内容
                            }
                            removeAvatar(ii?.data); // 头像挂件,关注按钮
                        }
                        item.items = newII;
                    } else {
                        let newII = [];
                        for (let ii of item.items) {
                            if (ii?.data) {
                                if (ii?.data?.common_struct) {
                                    delete ii.data.common_struct;
                                }
                                removeAvatar(ii?.data);
                                if ([1008, 1024]?.includes(ii?.data?.card_type)) {
                                    // 1008关注你感兴趣的超话 1024超话顶部发现
                                    continue;
                                } else {
                                    newII.push(ii);
                                }
                            }
                        }
                        item.items = newII;
                    }
                }
                if (item?.header?.arrayText?.contents?.length > 0) {
                    // 你的好友也关注了
                    continue;
                }
                newItems.push(item);
            } else {
                // 移除其他推广
                continue;
            }
        }
        obj.items = newItems;
    }
}

/**
 * 处理微博扩展
 * @param obj
 */
function handleContainerExtend(obj) {
    // 微博详情页
    if (obj?.trend?.extra_struct?.extBtnInfo?.btn_picurl?.includes("ad")) {
        delete obj.trend;
    }
    if (obj.trend?.titles) {
        let title = obj.trend.titles.title;
        if (/(博主好物种草|相关推荐|专区)/.test(title)) {
            delete obj.trend;
        }
    }
    const item = ["bubble_guide_data", // 评论区弹窗
        "button_extra_info", // 推荐评论
        "display_info", // 二楼
        "extend_info", // 拓展卡片
        "floating_button", // 悬浮购物车按钮
        "follow_data", // 关注提醒
        "head_cards", // 超话投票
        "highlight", // 二楼
        "interaction_extra_info", // ai评论
        "page_alerts", // 超话新帖 新用户通知
        "reward_info", // 公益赞赏
        "source_tag_struct", // 二楼
        "top_cards" // 大家都在搜
    ];
    if (obj) {
        item.forEach((i) => {
            delete obj[i];
        });
    }
    if (obj?.custom_action_list?.length > 0) {
        let newActions = [];
        for (let item of obj.custom_action_list) {
            let type = item.type;
            let add = menusConfig[type];
            if (type === "mblog_menus_copy_url") {
                newActions.unshift(item);
            } else if (add) {
                newActions.push(item);
            }
        }
        obj.custom_action_list = newActions;
    }
    if (obj?.has_common_struct) {
        obj.has_common_struct = false; // 商品橱窗
    }
    if (obj?.enable_comment_guide) {
        obj.enable_comment_guide = false; // 评论指引
    }
}

/**
 * 处理转发时间线
 * @param obj
 */
function handleRepostTimeline(obj) {
    // 评论详情页 转发区
    if (obj?.hot_reposts?.length > 0) {
        // 样式1
        let newReposts = [];
        for (let item of obj.hot_reposts) {
            if (!isAd(item)) {
                newReposts.push(item);
            }
        }
        obj.hot_reposts = newReposts;
    }
    if (obj?.reposts?.length > 0) {
        // 样式2
        let newReposts = [];
        for (let item of obj.reposts) {
            if (!isAd(item)) {
                newReposts.push(item);
            }
        }
        obj.reposts = newReposts;
    }
}

/**
 * 处理微博展示
 * @param obj
 */
function handleStatusesShow(obj) {
    removeFeedAd(obj); // 信息流推广
    // 循环引用中的商品橱窗
    if (obj?.text) {
        removeFeedAd(obj.text); // 信息流推广
    }
    if (obj?.reward_info) {
        delete obj.reward_info; // 赞赏信息
    }
    // 投票窗口
    removeVoteInfo(obj);
}

/**
 * 处理全屏视频流
 * @param obj
 */
function handleFullScreenVideoStream(obj) {
    // 视频页
    if (obj?.statuses?.length > 0) {
        let newStatuses = [];
        for (let item of obj.statuses) {
            if (!isAd(item)) {
                removeAvatar(item);
                if (item?.video_info?.tags?.length > 0) {
                    // 投票
                    item.video_info.tags = [];
                }
                newStatuses.push(item);
            }
        }
        obj.statuses = newStatuses;
    }
}

/**
 * 处理视频中的详情
 * @param obj
 */
function handleVideoStreamDetail(obj) {
    if (obj?.status?.video_info?.shopping?.length > 0) {
        // 带货
        obj.status.video_info.shopping = [];
    }
    if (obj?.status?.video_info?.bottom_banner) {
        // 大家都在搜
        obj.status.video_info.bottom_banner = {};
    }
    if (obj?.status?.video_info?.float_info) {
        // 悬浮窗
        obj.status.video_info.float_info = {};
    }
}

/**
 * 处理视频流列表
 * @param obj
 */
function handleVideoStreamList(obj) {
    if (obj?.statuses?.length > 0) {
        obj.statuses = []; // 移除视频自动连播
        // obj.statuses = obj.statuses.filter((m) => !(m?.mblogtypename === "广告"));
    }
    if (obj?.tab_list?.length > 0) {
        obj.tab_list = [];
    }
}

/**
 * 处理话题发现页
 * @param obj
 */
function handleTopicDiscovery(obj) {
    if (obj?.button_configs) {
        delete obj.button_configs; // 超话左上角,右上角图标
    }
    // 广场页
    if (obj?.channelInfo?.channel_list?.length > 0) {
        obj.channelInfo.channel_list = obj.channelInfo.channel_list.filter((t) => t?.title !== "广场");
    }
}

/**
 * 应用图标列表
 * @param obj
 */
function handleAppIconList(obj) {
    if (obj?.data?.list?.length > 0) {
        for (let item of obj.data.list) {
            if (item?.cardType) {
                item.cardType = 2;
            }
        }
    }
}

/**
 * 处理预加载广告
 * @param obj
 */
function handleAdPreload(obj) {
    log(`ℹ️ 脚本处理预载广告`);
    if (obj?.ads?.length > 0) {
        for (let item of obj.ads) {
            item.start_time = 3818332800; // Unix 时间戳 2090-12-31 00:00:00
            item.end_time = 3818419199; // Unix 时间戳 2090-12-31 23:59:59
            item.daily_display_cnt = 50; // total_display_cnt: 50
            item.display_duration = 0;
        }
        if (obj?.ads?.creatives?.length > 0) {
            for (let item of obj.ads.creatives) {
                item.start_time = 3818332800; // Unix 时间戳 2090-12-31 00:00:00
                item.end_time = 3818419199; // Unix 时间戳 2090-12-31 23:59:59
                item.daily_display_cnt = 50; // total_display_cnt: 50
                item.display_duration = 0;
            }
        }
        log(`✅ 共处理： ${obj?.ads?.length} 条广告`);
    }
    log(`🏁 预载广告处理完毕`);
}

/**
 * 处理微博拉取广告
 * @param obj
 */
function handleWbPullAd(obj) {
    log(`ℹ️ 脚本处理拉取广告`);
    if (obj?.cached_ad?.ads?.length > 0) {
        for (let item of obj.cached_ad.ads) {
            item.show_count = 50;
            item.duration = 0; // 60 * 60 * 24 * 365 = 31536000
            item.start_date = 3818332800; // Unix 时间戳 2090-12-31 00:00:00
            item.end_date = 3818419199; // Unix 时间戳 2090-12-31 23:59:59
        }
        log(`✅ 共处理： ${obj?.cached_ad?.ads?.length} 条广告`);
    }
    log(`🏁 拉取广告处理完毕`);
}

/********************************工具类方法*********************************/
/**
 * 日志记录方法
 * @param e
 */
function log(e) {
    debugMode && console.log(e);
}

/**
 * 判断是否为广告
 * @param data 传入内容
 * @returns {boolean} 返回是否为广告
 */
function isAd(data) {
    if (data?.readtimetype === "adMblog") {
        return true;
    }
    if (data?.promotion?.type?.includes("ad")) {
        return true;
    }
    if (data?.ads_material_info?.is_ads === true) {
        return true;
    }
    if (data?.mblogtypename === "广告" || data?.mblogtypename === "热推") {
        return true;
    }
    if (data?.promotion?.recommend === "广告" || data?.promotion?.recommend === "热推") {
        return true;
    }
    if (data?.content_auth_info?.content_auth_title === "广告" || data?.content_auth_info?.content_auth_title === "热推") {
        return true;
    }
    return false;
}

/**
 * 移除头像挂件与关注按钮
 * @param data
 */
function removeAvatar(data) {
    if (data?.block_card_bg) {
        delete data.block_card_bg;
    }
    if (data?.buttons) {
        delete data.buttons;
    }
    if (data?.cardid) {
        delete data.cardid;
    }
    if (data?.icons) {
        delete data.icons;
    }
    if (data?.mblog_buttons) {
        delete data.mblog_buttons; // 转发按钮图标
    }
    if (data?.pic_bg_new) {
        delete data.pic_bg_new;
    }
    if (data?.user?.avatargj_id) {
        delete data.user.avatargj_id;
    }
    if (data?.user?.avatar_extend_info) {
        delete data.user.avatar_extend_info;
    }
    if (data?.user?.cardid) {
        delete data.user.cardid;
    }
    if (data?.user?.icons) {
        delete data.user.icons;
    }
    if (data?.user?.mbtype) {
        delete data.user.mbtype; // 会员等级图标
    }
}

/**
 * 移除信息流关注按钮,推广,热评
 * @param item
 */
function removeFeedAd(item) {
    removeAvatar(item); // 头像挂件,关注按钮
    if (item?.retweeted_status) {
        removeAvatar(item?.retweeted_status);
    }
    if (item?.common_struct) {
        delete item.common_struct; // 商品橱窗
    }
    if (item?.comment_summary) {
        delete item.comment_summary; // 移除信息流中的热评
    }
    if (item?.semantic_brand_params) {
        delete item.semantic_brand_params; // 商品橱窗
    }
}

/**
 * 移除评论区广告
 * @param item
 */
function removeCommentAd(item){
    if (item?.data?.comment_bubble) {
        delete item.data.comment_bubble; // 评论气泡
    }
    if (item?.data?.comment_bullet_screens_message) {
        delete item.data.comment_bullet_screens_message; // 评论弹幕
    }
    if (item?.data?.hot_icon) {
        delete item.data.hot_icon; // 热评小图标 弹幕 首评
    }
    if (item?.data?.vip_button) {
        delete item.data.vip_button; // 会员气泡按钮
    }
    // 微博伪装评论
    if (item?.data?.user) {
        removeAvatar(item?.data); // 头像挂件,关注按钮
        // if (/(超话社区|微博)/.test(item?.data?.user?.name)) {
        //     continue;
        // }
    }
}

/**
 * 移除投票窗口
 * @param item
 */
function removeVoteInfo(item) {
    if (item?.page_info?.media_info?.vote_info) {
        delete item.page_info.media_info.vote_info;
    }
}