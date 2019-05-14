module github.com/chartmogul/work

go 1.12

require (
	github.com/albrow/jobs v0.4.2
	github.com/benmanns/goworker v0.1.3
	github.com/braintree/manners v0.0.0-20160418043613-82a8879fc5fd
	github.com/gocraft/health v0.0.0-20170925182251-8675af27fef0
	github.com/gocraft/web v0.0.0-20190207150652-9707327fb69b
	github.com/gocraft/work v0.5.1
	github.com/gomodule/redigo v2.0.0+incompatible
	github.com/jrallison/go-workers v0.0.0-20180112190529-dbf81d0b75bb
	github.com/robfig/cron v1.1.0
	github.com/stretchr/testify v1.3.0
)

replace github.com/gocraft/work => ./
