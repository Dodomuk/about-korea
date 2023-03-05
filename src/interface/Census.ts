export interface DemographicsReq {
  accessToken: string; //액세스토큰
  year: number; //기준년도
  gender?: number; //성별(default: 0)
  adm_cd?: number; //행정구역코드("영역검색유무"가 행정구역일 경우)
  low_search?: number; //하위 통계 정보 유무("영역검색유무"가 행정구역일 경우)
  age_type?: number; //연령타임
  edu_level?: number; //교육정도( * 2010년까지 제공, 2015년도는 제공하지 않음)
  mrg_state?: number; //혼인상태( * 2010년까지 제공, 2015년도는 제공하지 않음)
}

export interface DemographicsRes {
  adm_cd: string; //설명
  adm_nm: string; //행정구역명
  population: string; //인구수
  avg_age: number; //검색인구 평균나이
}
