function calc_muv (dst=undefined, vi=undefined, vf=undefined, tmp=undefined, acl=undefined) {
    knw_vals = [dst, vi, vf, tmp, acl];
    unk_vals = [];

    for(var i = 0;i < knw_vals.length;i++) {
        if (knw_vals[i] === undefined) {
            unk_vals.push(knw_vals[i]);
            knw_vals.splice(i, 1);
        }
    }

    if (dst === undefined) {
        if (vi !== undefined && tmp !== undefined && acl !== undefined) {
            dst = (vi * tmp) + 0,5 * acl * (tmp * tmp);
        } else if (vi === undefined && vf !== undefined && tmp !== undefined && acl !== undefined) {
            dst = (vf * tmp) - 0,5 * acl * (tmp * tmp);
        } else if (vi !== undefined && vf !== undefined && tmp !== undefined && acl === undefined) {
            dst = (vi + vf) / (2 * tmp);
        }
    }

    if (vi === undefined) {
        if (dst === undefined && vi !== undefined && vf !== undefined && acl !== undefined && tmp !== undefined) {
            vi = vf - (acl * tmp);
        }

        if (dst !== undefined && vi !== undefined && vf !== undefined && acl !== undefined && tmp === undefined) {
            vi = (vf - (2 * a) * dst)^1 / 2;
        }
    }

    if (vf === undefined) {
        if (dst === undefined && vi !== undefined && vf !== undefined && acl !== undefined && tmp !== undefined) {
            vf = vi + (acl * tmp);
        }

        if (dst !== undefined && vi !== undefined && vf !== undefined && acl !== undefined && tmp === undefined) {
            vi = (vf + (2 * a) * dst) ^ 1 / 2;
        }
    }

    if (tmp === undefined && vi !== undefined && vf !== undefined && acl !== undefined) {
        tmp = (vf - vi) / acl;
    }

    if (acl === undefined) {

        if (tmp !== undefined && vi !== undefined && vf !== undefined) {
            acl = (vf - vi) / tmp;
        }

        if (tmp !== undefined && vi === undefined) {
            acl = (dst - (vi * tmp)) / (0,5 * tmp) * (0,5 * tmp);
        }

        if (tmp !== undefined && vf === undefined) {
            acl = (dst - (vf * tmp)) / (0,5 * tmp) * (0,5 * tmp);
        }

        if (vf !== undefined && vi !== undefined && dst !== undefined) {
            acl = ((vi * vi) - (vf * vf)) / 2 * dst
        }

    }

    resul = knw_vals.concat(unk_vals);
    return resul;
}