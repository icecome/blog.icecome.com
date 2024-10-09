import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as s,f as a,e as r,b as l,o as t}from"./app-TChdOyIt.js";const d={};function c(o,e){return t(),i("div",null,[e[0]||(e[0]=s("br",null,null,-1)),e[1]||(e[1]=s("h1",{id:"前言",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#前言"},[s("span",null,"前言")])],-1)),e[2]||(e[2]=s("p",null,[a("之所以有这么一篇内容，是由于之前购入了一台"),s("strong",null,"联想 910 Q 准系统"),a("，配齐配件后想当一个学习 "),s("em",null,[s("strong",null,"All in One")]),a(" 的平台。因为有直通的念头，所以找遍网上的教程，学习了一番，然后再记录下来，分享给大家。")],-1)),r(" more "),e[3]||(e[3]=l(`<h2 id="更新源" tabindex="-1"><a class="header-anchor" href="#更新源"><span>更新源</span></a></h2><p>由于我是新装的 <strong>PVE</strong>，<strong>PVE 7</strong> 安装后默认配置的 <em><strong>apt</strong></em> 软件源是官方默认的，国内使用性能不佳，所以先更新一下软件源，这里我替换为了 <a href="https://tuna.moe/" target="_blank" rel="noopener noreferrer"><strong>清华大学 TUNA 协会</strong></a> 提供的国内镜像源，速度是有一个较大的提升。</p><h3 id="替换-apt-软件源" tabindex="-1"><a class="header-anchor" href="#替换-apt-软件源"><span>替换 apt 软件源</span></a></h3><h4 id="更新证书" tabindex="-1"><a class="header-anchor" href="#更新证书"><span><strong>更新证书</strong></span></a></h4><p>先更新一下证书，否则可能由于证书不可用导致 https 无法使用，进而无法下载所有软件。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>apt install apt-transport-https ca-certificates</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>由于我是直接在 <strong>PVE</strong> 的 <code>root</code> 账户上操作的，所以不需要提权，如果你是使用其他账户操作，可能需要先提权后在执行上述命令，以下均默认 <code>root</code> 账户操作。</p><h4 id="替换通用软件源" tabindex="-1"><a class="header-anchor" href="#替换通用软件源"><span>替换通用软件源</span></a></h4><p>首先替换通用软件源， <strong>PVE</strong> 是基于 <strong>Debian</strong> 的 <strong>Linux</strong> 系统，而 <strong>Debian</strong> 的软件源配置文件是 <code>/etc/apt/sources.list</code>，备份后将其中内容修改为以下即可：</p><p>先备份，</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>mv /etc/apt/sources.list /etc/apt/sources.list.bak</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>新建并编辑，</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>vim /etc/apt/sources.list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>复制下面的内容，并保存。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span># 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释</span></span>
<span class="line"><span>deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free</span></span>
<span class="line"><span># deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free</span></span>
<span class="line"><span>deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free</span></span>
<span class="line"><span># deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free</span></span>
<span class="line"><span></span></span>
<span class="line"><span>deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free</span></span>
<span class="line"><span># deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free</span></span>
<span class="line"><span></span></span>
<span class="line"><span>deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free</span></span>
<span class="line"><span># deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="替换-pve-软件源" tabindex="-1"><a class="header-anchor" href="#替换-pve-软件源"><span>替换 PVE 软件源</span></a></h4><p>之后替换 <strong>PVE</strong> 软件源，<strong>PVE</strong> 镜像默认的 <strong>PVE</strong> 软件源配置文件是 <code>/etc/apt/sources.list.d/pve-enterprise.list</code> ，备份后将其中内容替换为以下即可：</p><p>先备份，</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>mv /etc/apt/sources.list.d/pve-enterprise.list /etc/apt/sources.list.d/pve-enterprise.list.bak</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>新建并编辑，</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>vim /etc/apt/sources.list.d/pve-enterprise.list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>复制下面的内容，并保存。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>deb https://mirrors.tuna.tsinghua.edu.cn/proxmox/debian bullseye pve-no-subscription</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="更新软件" tabindex="-1"><a class="header-anchor" href="#更新软件"><span>更新软件</span></a></h4><p>最后更新下，</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>apt update &amp;&amp; apt upgrade -y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="pve-直通核显" tabindex="-1"><a class="header-anchor" href="#pve-直通核显"><span>PVE 直通核显</span></a></h2><h3 id="配置环境" tabindex="-1"><a class="header-anchor" href="#配置环境"><span>配置环境</span></a></h3><ul><li><strong>PVE</strong> 版本：PVE 7.2-7</li><li>关键软件包版本：pve-qemu-kvm=6.1.1-2</li><li>虚拟机 Windows 11 版本：zh-cn_windows_11_21 H 2_VOL_x 64</li></ul><p>此处参考教程直通了 <strong>NVME</strong> 固态硬盘，将 <strong>pve-qemu-kvm</strong> 由 6.2.0-10 降级至 6.1.1-2，因为我后来并未直通硬盘，所以较新版本无任何影响。</p><h3 id="硬件平台及-bios-设置" tabindex="-1"><a class="header-anchor" href="#硬件平台及-bios-设置"><span>硬件平台及 BIOS 设置</span></a></h3><p>因为参考的主要文章是针对 <strong>Legacy</strong> 启动的，所以本文也是基于此而生。</p><ul><li>M 910 Q 准系统</li><li>Inter I 5 8400 魔改</li></ul><h4 id="bios-设置" tabindex="-1"><a class="header-anchor" href="#bios-设置"><span>BIOS 设置</span></a></h4><p>首先确保 VT-D 是启用的状态，然后要开启 CSM 即兼容模块，打开 <strong>Legacy</strong> 启动。<br><img src="https://img-cdn.icecome.com/image/pve/20220804_153816.png" alt="BIOS设置" loading="lazy"></p><h3 id="pve-直通设置" tabindex="-1"><a class="header-anchor" href="#pve-直通设置"><span>PVE 直通设置</span></a></h3><p>正式进入正题，这里我参考了多个教程后修改成的我自己的方式，因为有些设置在我的设备中出现了各种各样的问题，所以能看到我这个内容的要学会变通。</p><h4 id="开启底层的硬件直通功能" tabindex="-1"><a class="header-anchor" href="#开启底层的硬件直通功能"><span>开启底层的硬件直通功能</span></a></h4><p>首先进入 <strong>PVE</strong> 的 <strong>shell</strong> 界面，编辑 <code>/etc/default/grub</code>，这里我使用的是 <code>vim</code>，可能有些比我更小白的朋友输入命令不管用，那就是没安装，可以使用 <code>nano</code>，大佬就忽略吧。<br> 编辑 <code>/etc/default/grub</code></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>vim /etc/default/grub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>找到：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>GRUB_CMDLINE_LINUX_DEFAULT=&quot;quiet&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>GRUB_CMDLINE_LINUX_DEFAULT=&quot;quiet intel_iommu=on iommu=pt video=efifb:off,vesafb:off&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://img-cdn.icecome.com/image/pve/20220804_151517.png" alt="直通参数" tabindex="0" loading="lazy"><figcaption>直通参数</figcaption></figure><p>此处，</p><ul><li><strong>iommu</strong> 开启直通分组</li><li><strong>efifb:off</strong> 禁用 <strong>efi</strong> 启动的显示设备</li><li><strong>vesafb:off</strong> 禁用 <strong>legacy</strong> 启动的显示设备</li></ul><p>更新 <strong>grub</strong> 配置文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>update-grub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="加载模块" tabindex="-1"><a class="header-anchor" href="#加载模块"><span>加载模块</span></a></h4><p>编辑 <code>/etc/modules</code></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>vim /etc/modules</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>该文件是空白的，直接复制进去即可，具体每个是什么意思，我也暂时没找到解释。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>vfio</span></span>
<span class="line"><span>vfio_iommu_type1</span></span>
<span class="line"><span>vfio_pci</span></span>
<span class="line"><span>vfio_virqfd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-cdn.icecome.com/image/pve/20220804_151435.png" alt="模块参数" tabindex="0" loading="lazy"><figcaption>模块参数</figcaption></figure><h3 id="禁用-pve-系统加载显卡驱动" tabindex="-1"><a class="header-anchor" href="#禁用-pve-系统加载显卡驱动"><span>禁用 PVE 系统加载显卡驱动</span></a></h3><p>因为 <strong>PVE</strong> 启动时会尝试加载显卡驱动，为了避免 <strong>PVE</strong> 占用显卡，需要阻止 <strong>PVE</strong> 的显卡驱动加载。</p><h4 id="添加黑名单" tabindex="-1"><a class="header-anchor" href="#添加黑名单"><span>添加黑名单</span></a></h4><p>编辑 <code>/etc/modprobe.d/pve-blacklist.conf</code></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>vim /etc/modprobe.d/pve-blacklist.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>添加内容，</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>blacklist snd_hda_intel</span></span>
<span class="line"><span>blacklist snd_hda_codec_hdmi</span></span>
<span class="line"><span>blacklist i915</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-cdn.icecome.com/image/pve/20220804_151354.png" alt="屏蔽参数" tabindex="0" loading="lazy"><figcaption>屏蔽参数</figcaption></figure><p>由于我的平台仅有核显，所以未添加英伟达等黑名单，若是需直通独显，可能还需添加其他相关设备。</p><h4 id="查找显卡的设备-id-并添加直通" tabindex="-1"><a class="header-anchor" href="#查找显卡的设备-id-并添加直通"><span>查找显卡的设备 ID 并添加直通</span></a></h4><p>查看显卡及声卡设备 <strong>ID</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>lspci -n | grep -E &quot;0300|0403&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中 0300 代表显卡，0403 代表声卡，如下所示，UHD 630 的硬件 <strong>ID</strong> 是 <code>8086:3e92</code> 。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>00:02.0 0300: 8086:3e92</span></span>
<span class="line"><span>00:1f.3 0403: 8086:a2f0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="添加直通组" tabindex="-1"><a class="header-anchor" href="#添加直通组"><span>添加直通组</span></a></h4><p>找到显卡后记下硬件 <strong>ID</strong><br> 编辑 <code>/etc/modprobe.d/vfio.conf</code></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>vim /etc/modprobe.d/vfio.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>添加内容，硬件 <strong>ID</strong>需注意替换为自己的。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>options vfio-pci ids=8086:3e92</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="添加-options-防止-vm-死机" tabindex="-1"><a class="header-anchor" href="#添加-options-防止-vm-死机"><span>添加 options 防止 VM 死机</span></a></h4><p>编辑 <code>/etc/modprobe.d/kvm.conf</code></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>vim /etc/modprobe.d/kvm.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>options kvm ignore_msrs=1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>不过好像并无作用，没成功的过程中，我的设备该死机还是会死机。</p><h4 id="更新内核并重启-pve-虚拟机" tabindex="-1"><a class="header-anchor" href="#更新内核并重启-pve-虚拟机"><span>更新内核并重启 PVE 虚拟机</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>update-initramfs -u -k all</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="输入命令检查模块是否加载成功" tabindex="-1"><a class="header-anchor" href="#输入命令检查模块是否加载成功"><span>输入命令检查模块是否加载成功</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>lsmod | grep vfio</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>root@bing6:~# lsmod | grep vfio</span></span>
<span class="line"><span>vfio_pci               16384  0</span></span>
<span class="line"><span>vfio_pci_core          73728  1 vfio_pci</span></span>
<span class="line"><span>vfio_virqfd            16384  1 vfio_pci_core</span></span>
<span class="line"><span>irqbypass              16384  2 vfio_pci_core,kvm</span></span>
<span class="line"><span>vfio_iommu_type1       40960  0</span></span>
<span class="line"><span>vfio                   45056  2 vfio_pci_core,vfio_iommu_type1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回成功。</p><h3 id="win-虚拟机设置" tabindex="-1"><a class="header-anchor" href="#win-虚拟机设置"><span>Win 虚拟机设置</span></a></h3><h4 id="新建虚拟机" tabindex="-1"><a class="header-anchor" href="#新建虚拟机"><span>新建虚拟机</span></a></h4><p>新建虚拟机，显卡默认，机型默认 <strong>i 440 fx</strong> ，<strong>BIOS</strong> 默认 <strong>SeaBIOS</strong>，开启 <strong>Qemu</strong> 代理，<strong>CPU</strong> 开启 <strong>NUMA</strong>，确认。<br> 转到虚拟机设置的硬件，添加两块 <strong>CD/DVD</strong> 驱动器，挂载 Windows 系统安装 ISO 镜像，</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>https://github.com/AveYo/MediaCreationTool.bat</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>以及 VirtIO 驱动 ISO 镜像</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/archive-virtio/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="安装系统" tabindex="-1"><a class="header-anchor" href="#安装系统"><span>安装系统</span></a></h4><p>开机装系统，安装驱动，关机。</p><h3 id="虚拟机参数配置" tabindex="-1"><a class="header-anchor" href="#虚拟机参数配置"><span>虚拟机参数配置</span></a></h3><h4 id="编辑-etc-pve-qemu-server-vmid-conf" tabindex="-1"><a class="header-anchor" href="#编辑-etc-pve-qemu-server-vmid-conf"><span>编辑 <code>/etc/pve/qemu-server/&lt;VMID&gt;.conf</code>，</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span style="color:#DCDCAA;">vim</span><span style="color:#CE9178;"> /etc/pve/qemu-server/</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#CE9178;">VMI</span><span style="color:#E6E6E6;">D</span><span style="color:#D4D4D4;">&gt;</span><span style="color:#CE9178;">.</span><span style="color:#CE9178;"> conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>首行添加内容，</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#222222;color:#E6E6E6;"><pre class="shiki slack-dark vp-code"><code><span class="line"><span>Args: -set device. Hostpci 0. X-igd-gms=1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://img-cdn.icecome.com/image/pve/20220804_151101.png" alt="直通参数" tabindex="0" loading="lazy"><figcaption>直通参数</figcaption></figure><p>此处需尤为注意，首行代码各教程均有不同方案，我试过多个方案，均无法正常直通。</p><p>由于本人小白水平，也无法搞清具体代码是什么意思，为什么需这样设置，所以尝试多次才确认此方案在我机器上可正常使用，不代表看到文章的所有人都适用。</p><h4 id="添加直通-pci-设备" tabindex="-1"><a class="header-anchor" href="#添加直通-pci-设备"><span>添加直通 <strong>PCI</strong> 设备</span></a></h4><p>转到虚拟机设置的硬件，<br> 添加直通核显<br><img src="https://img-cdn.icecome.com/image/pve/20220804_142147.png" alt="添加直通核显" loading="lazy"><br> 添加直通声卡<br><img src="https://img-cdn.icecome.com/image/pve/20220804_142540.png" alt="添加直通声卡" loading="lazy"><br> 添加直通 USB<br><img src="https://img-cdn.icecome.com/image/pve/20220804_143353.png" alt="添加直通 USB" loading="lazy"></p><p>上述 <strong>PCI</strong> 设备添加完成后，将显示由<strong>默认</strong>改为<strong>无</strong>，改完若 <strong>PVE</strong> 已经连接显示器，启动虚拟机即可在物理显示器中正常使用。</p><p>注意，此时<strong>PVE</strong> 的控制台，由于更改了显示模式，会导致 <strong>VNC</strong> 无法连接，暂无解决方法。</p><p>最后值得注意的是，虚拟机的睡眠休眠需检查是否关闭。</p><h1 id="end" tabindex="-1"><a class="header-anchor" href="#end"><span>End.</span></a></h1><hr>`,108))])}const g=n(d,[["render",c],["__file","虚拟机核显直通.html.vue"]]),h=JSON.parse('{"path":"/learn/play/nas/%E8%99%9A%E6%8B%9F%E6%9C%BA%E6%A0%B8%E6%98%BE%E7%9B%B4%E9%80%9A.html","title":"PVE 中虚拟机 Windows 11 核显直通","lang":"zh-CN","frontmatter":{"title":"PVE 中虚拟机 Windows 11 核显直通","date":"2022-08-04T15:50:33.000Z","author":"都将焉予","cover":null,"icon":"cib:proxmox","order":-1,"category":["学习"],"tags":["动手实践","NAS"],"toc":true,"article":true,"star":false,"sticky":false,"editLink":false,"pageview":false,"lastUpdated":false,"description":"前言 之所以有这么一篇内容，是由于之前购入了一台联想 910 Q 准系统，配齐配件后想当一个学习 All in One 的平台。因为有直通的念头，所以找遍网上的教程，学习了一番，然后再记录下来，分享给大家。","head":[["meta",{"property":"og:url","content":"https://blog.icecome.com/learn/play/nas/%E8%99%9A%E6%8B%9F%E6%9C%BA%E6%A0%B8%E6%98%BE%E7%9B%B4%E9%80%9A.html"}],["meta",{"property":"og:site_name","content":"三无亦拾吾"}],["meta",{"property":"og:title","content":"PVE 中虚拟机 Windows 11 核显直通"}],["meta",{"property":"og:description","content":"前言 之所以有这么一篇内容，是由于之前购入了一台联想 910 Q 准系统，配齐配件后想当一个学习 All in One 的平台。因为有直通的念头，所以找遍网上的教程，学习了一番，然后再记录下来，分享给大家。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img-cdn.icecome.com/image/pve/20220804_153816.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-09T07:43:26.000Z"}],["meta",{"property":"article:author","content":"都将焉予"}],["meta",{"property":"article:tag","content":"动手实践"}],["meta",{"property":"article:tag","content":"NAS"}],["meta",{"property":"article:published_time","content":"2022-08-04T15:50:33.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-09T07:43:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PVE 中虚拟机 Windows 11 核显直通\\",\\"image\\":[\\"https://img-cdn.icecome.com/image/pve/20220804_153816.png\\",\\"https://img-cdn.icecome.com/image/pve/20220804_151517.png\\",\\"https://img-cdn.icecome.com/image/pve/20220804_151435.png\\",\\"https://img-cdn.icecome.com/image/pve/20220804_151354.png\\",\\"https://img-cdn.icecome.com/image/pve/20220804_151101.png\\",\\"https://img-cdn.icecome.com/image/pve/20220804_142147.png\\",\\"https://img-cdn.icecome.com/image/pve/20220804_142540.png\\",\\"https://img-cdn.icecome.com/image/pve/20220804_143353.png\\"],\\"datePublished\\":\\"2022-08-04T15:50:33.000Z\\",\\"dateModified\\":\\"2024-10-09T07:43:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"都将焉予\\"}]}"]]},"headers":[{"level":2,"title":"更新源","slug":"更新源","link":"#更新源","children":[{"level":3,"title":"替换 apt 软件源","slug":"替换-apt-软件源","link":"#替换-apt-软件源","children":[]}]},{"level":2,"title":"PVE 直通核显","slug":"pve-直通核显","link":"#pve-直通核显","children":[{"level":3,"title":"配置环境","slug":"配置环境","link":"#配置环境","children":[]},{"level":3,"title":"硬件平台及 BIOS 设置","slug":"硬件平台及-bios-设置","link":"#硬件平台及-bios-设置","children":[]},{"level":3,"title":"PVE 直通设置","slug":"pve-直通设置","link":"#pve-直通设置","children":[]},{"level":3,"title":"禁用 PVE 系统加载显卡驱动","slug":"禁用-pve-系统加载显卡驱动","link":"#禁用-pve-系统加载显卡驱动","children":[]},{"level":3,"title":"Win 虚拟机设置","slug":"win-虚拟机设置","link":"#win-虚拟机设置","children":[]},{"level":3,"title":"虚拟机参数配置","slug":"虚拟机参数配置","link":"#虚拟机参数配置","children":[]}]}],"git":{"createdTime":1728459806000,"updatedTime":1728459806000,"contributors":[{"name":"icecome","email":"werrice@outlook.com","commits":1}]},"readingTime":{"minutes":5.91,"words":1773},"filePathRelative":"learn/play/nas/虚拟机核显直通.md","localizedDate":"2022年8月4日","excerpt":"<br>\\n<h1>前言</h1>\\n<p>之所以有这么一篇内容，是由于之前购入了一台<strong>联想 910 Q 准系统</strong>，配齐配件后想当一个学习 <em><strong>All in One</strong></em> 的平台。因为有直通的念头，所以找遍网上的教程，学习了一番，然后再记录下来，分享给大家。</p>\\n","autoDesc":true}');export{g as comp,h as data};
